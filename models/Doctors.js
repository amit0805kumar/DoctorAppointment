const mongoose = require('mongoose')

const DoctorSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dC: {
        type: Number,
        required: true,
    },
    emergency: {
        type: Boolean,
        required: true,
    },
    freeFrom:{
        type:String,
        required: true
    },
    freeTo:{
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

var Doctor = mongoose.model('doctor', DoctorSchema)
module.exports = Doctor