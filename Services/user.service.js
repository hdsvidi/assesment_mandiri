const UserRepository = require('../Repository/user.repository')
const UserService = () =>{

    const addUser = async function(payload){
        try{
            return await UserRepository().register(payload)
        }
        catch(err){
            throw err.message
        }
    }

    const findUserByUsernamePassword = async (username, password) => {
        try {
            return await UserRepository().getUserByUsernamePassword(username, password);
        } catch (err) {
            throw err.message
        }
    }

    return{
        addUser, findUserByUsernamePassword
    }
}

module.exports = UserService;