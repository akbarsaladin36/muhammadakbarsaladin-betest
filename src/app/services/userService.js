const userRepository = require('../repositories/userRepository')

class UserService {
    async findAllUserService() {
        return await userRepository.findAll()
    }

    async findByAccountNumberService(accountNumber) {
        const user = await userRepository.findByAccountNumber(accountNumber)
        if (!user) throw new Error('User with this account number are not found!')
        return user
    }

    async findByRegistrationNumberService(registrationNumber) {
        const user = await userRepository.findByRegistrationNumber(registrationNumber)
        if(!user) throw new Error('User with this registration number are not found!')
        return user
    }

    async createUserService(setData) {
        const existingUser = await userRepository.findOneByEmail(setData.emailAddress)
        if(existingUser) throw new Error('User is registered! Please try a new data again!')
        return await userRepository.create(setData)
    }

    async updateUserService(emailAddress, setData) {
        const existingUser = await userRepository.findOneByEmail(emailAddress)
        if(!existingUser) throw new Error('User is not found!')
        return await userRepository.update(emailAddress, setData)
    }

    async deleteUserService(emailAddress) {
        const existingUser = await userRepository.findOneByEmail(emailAddress)
        if(!existingUser) throw new Error('User is not found!')
        return await userRepository.delete(emailAddress)
    }
}

module.exports = new UserService()