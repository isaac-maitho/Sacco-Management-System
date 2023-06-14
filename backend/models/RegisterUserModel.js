const mongoose = require('mongoose')

const Schema = mongoose.Schema

const member = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trime: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    idNumber: {
        type: Number,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }

},{timestamps: true})

module.exports = mongoose.model('member', member)