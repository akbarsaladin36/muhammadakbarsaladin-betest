const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
        accountId: {
            type: String,
            required: true
        },
        userId: {
            type: String
        },
        userName: {
            type: String
        },
        password: {
            type: String
        },
        lastLoginDateTime: {
            type: Date
        }
    },
    { 
        timestamps: true
    }
)

const User = mongoose.model('users', userSchema)

module.exports = User