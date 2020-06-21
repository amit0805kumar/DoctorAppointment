const express = require('express')
const router = express.Router()
const data = require('../../data.json')


// const { check, validationResult } = require('express-validator');

router.post('/',async (req, res)=>{
    try {
        const from = parseInt(req.body.from);
        const to = parseInt(req.body.to);
        if (from > to) {
            return res.status(500).send('Please select proper time fomat');
        }
        if (isNaN(from)) {
            return res.status(500).send('Please enter starting time');
        }
        if (isNaN(to)) {
            return res.status(500).send('Please select ending time');
        }
        const availableDoctors = data.filter(doc => {
            const freeFrom = parseInt(doc.freeFrom);
            const freeTo = parseInt(doc.freeTo);
            return from >= freeFrom && to <= freeTo;
        })

        res.send(availableDoctors.length !== 0 ? availableDoctors : "Sorry no doctor found")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router 