const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accountSchema = new Schema(
    {
        accountId: {
            type: String
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
            type: Date,
            default: Date.now()
        }
    }
)

const Account = mongoose.model('accounts', accountSchema)

module.exports = Account