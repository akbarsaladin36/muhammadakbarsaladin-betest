const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accountSchema = new Schema(
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
    },
    { 
        timestamps: true
    }
)

const Account = mongoose.model('accounts', accountSchema)

module.exports = Account