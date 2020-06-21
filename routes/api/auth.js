const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("config");

const Doctor = require("../../models/Doctors");
const auth = require("../../middleware/auth");

//get user by token

router.get('/',auth,async(req, res)=>{
  try {
    const user = await Doctor.findById(req.user.id).select('-password')
    res.json(user)
} catch (error) {
    console.log(error.message)
    res.status(500).send('Server Error')
}
})

// @route POST api/auth/signup
// @desc To register a user
// @access Public
router.post(
  "/signup",
  [
    check("fname", "First name is required").not().isEmpty(),
    check("lname", "Last name is required").not().isEmpty(),
    check("email", "Enter a valid email").not().isEmpty(),
    check("freeFrom", "Enter a free from time").not().isEmpty(),
    check("freeTo", "Enter a free to time").not().isEmpty(),
    check("emergency", "Select emergency option").not().isEmpty(),
    check("dC", "Enter a valid distance").not().isEmpty(),
    check("password", "Please enter a valid password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const {
      fname,
      lname,
      email,
      password,
      freeFrom,
      freeTo,
      dC,
      emergency,
    } = req.body;
    try {
      let doctor = await Doctor.findOne({ email });
      if (doctor) {
        return res.status(400).json({
          errors: [
            {
              message: "User already exixts",
            },
          ],
        });
      }

      doctor = new Doctor({
        fname,
        lname,
        email,
        password,
        freeFrom,
        freeTo,
        dC,
        emergency,
      });
      const salt = await bcrypt.genSalt(10);
      doctor.password = await bcrypt.hash(password, salt);

      //Saving user
      await doctor.save();

      const payload = {
        doctor: {
          id: doctor.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtsecret"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) {
            throw err;
          }
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route POST api/auth/login
// @desc To register a user
// @access Public
router.post(
  "/login",
  [
    check("email", "Enter a valid email").not().isEmpty(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const { email, password } = req.body;
    try {
      const doctor = await Doctor.findOne({ email });
      if (!doctor) {
        return res.status(400).json({
          errors: [
            {
              message: "Invalid Credenitals",
            },
          ],
        });
      }

      const isMatch = await bcrypt.compare(password, doctor.password);
      if (!isMatch) {
        return res.status(400).json({
          errors: [
            {
              message: "Invalid Credenitals",
            },
          ],
        });
      }

      const payload = {
        user: {
          id: doctor.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtsecret"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) {
            throw err;
          }
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
