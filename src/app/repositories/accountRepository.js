const Account = require('../models/account')

class AccountRepository {
    async findAll() {
        return await Account.findAll()
    }

    async findOne(username) {
        return await Account.findOne({ userName: username })
    }

    async create(setData) {
        const account = new Account(setData)
        return account.save()
    }

    async update(username, setData) {
        return await Account.findOneAndUpdate({ userName: username }, setData)
    }

    async delete(username) {
        return await Account.findOneAndDelete({ userName: username })
    }
}

module.exports = new AccountRepository()