const mongoose = require('mongoose')

const Schema = mongoose.Schema

const registerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
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

module.exports = mongoose.model('Members', registerSchema)