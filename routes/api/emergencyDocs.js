const express = require('express')
const router = express.Router()
const data = require('../../data.json')

const { check, validationResult } = require('express-validator');

router.get('/',async (req, res)=>{
    try {
        const availableDoctors = data.filter(doc => {
            return doc.emergency === true
        })
        res.send(availableDoctors.length !== 0 ? availableDoctors : "Sorry no doctor found")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router 