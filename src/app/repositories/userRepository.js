const User = require('../models/user')

class UserRepository {
    async findAll() {
        return await User.findAll()
    }

    async findOneByEmail(email) {
        return await User.findOne({ emailAddress: email })
    }

    async findByAccountNumber(accountNumber) {
        return await User.findOne({ accountNumber: accountNumber })
    }

    async findByRegistrationNumber(registrationNumber) {
        return await User.findOne({ registrationNumber: registrationNumber })
    }

    async create(setData) {
        const user = new User(setData)
        return await user.save()
    }

    async update(emailAddress, setData) {
        return await User.findOneAndUpdate({ emailAddress: emailAddress}, setData)
    }

    async delete(emailAddress) {
        return await User.findOneAndDelete({ emailAddress: emailAddress })
    }
}

module.exports = new UserRepository()