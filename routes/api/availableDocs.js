const express = require("express");
const router = express.Router();
const Doctor = require("../../models/Doctors");
const { check, validationResult } = require("express-validator");

//Get available docs
router.post(
  "/",
  [
    check("from", "Please enter from time").not().isEmpty(),
    check("to", "please enter to time").not().isEmpty(),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const { from, to } = req.body;

    try {
      const data = await Doctor.find().select("-password");
      const availableDoctors = data.filter((doc) => {
        const freeFrom = parseInt(doc.freeFrom);
        const freeTo = parseInt(doc.freeTo);
        return from >= freeFrom && to <= freeTo;
      });

      if (availableDoctors.length == 0) {
        return res.status(400).json({
          errors: [
            {
              message: "No doctor found",
            },
          ],
        });
      }
      res.json(availableDoctors);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
