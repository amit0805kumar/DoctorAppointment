const express = require('express')
const router = express.Router()
const Doctor = require('../../models/Doctors')
const { check, validationResult } = require('express-validator');

//Get emergency docs
router.get('/',async (req, res)=>{
    try {
        const data = await Doctor.find().select('-password');

        const availableDoctors = data.filter(doc => {
            return doc.emergency === true
        })
        if(availableDoctors.length == 0){
            return res.status(400).json({ errors:[
                {
                    message: 'No doctor found'
                }
            ] })

        }
        res.json(availableDoctors)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
})

module.exports = router 