const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        userId: {
            type: String,
            required: true
        },
        fullName: {
            type: String
        },
        accountNumber: {
            type: String
        },
        emailAddress: {
            type: String
        },
        registrationNumber: {
            type: String
        }
    }
)

const User = mongoose.model('users', userSchema)

module.exports = User