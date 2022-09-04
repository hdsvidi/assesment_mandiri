const Response =require('../../utils/Response');
const UserService = require('../../Services/user.service');

const UserController = ()=>{

    const add = async function(req, res){
        try{
        const data = req.body
        const result = await UserService().addUser(data);
        res.json(Response().successMessage(res.statusCode, "Success ADD USER",result));
        }
        catch(err){
        res.json(Response().errorMessage(res.statusCode, [err.name, err.detail]));
        }
    }

    return{
        add
    }

}

module.exports = UserController;