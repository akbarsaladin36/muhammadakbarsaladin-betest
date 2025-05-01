const accountRepository = require('../repositories/accountRepository')

class UserService {
    async findAllAccountService() {
        return await accountRepository.findAll()
    }

    async findOneAccountService(username) {
        const account = await accountRepository.findOne(username)
        if(!account) throw new Error('Account not found!')
        return account
    }
    
    async createAccountService(setData) {
        const account = await accountRepository.findOne(username)
        if(account) throw new Error('Account is exist! Please try a new username!')
        return await accountRepository.create(setData)
    }

    async updateAccountService(username, setData) {
        const account = await accountRepository.findOne(username)
        if(!account) throw new Error('Account not found!')
        return await accountRepository.update(username, setData)
    }

    async deleteAccountService(username) {
        const account = await accountRepository.findOne(username)
        if(!account) throw new Error('Account not found!')
        return await accountRepository.delete(username)
    }
}

module.exports = new UserService()