const AuthenticationService = require('../../Services/auth.service');

const AuthenticationController = () => {
    const loginAccount = async (req, res) => {
        const payload = req.body;
        const token = await AuthenticationService().login(payload);
        res.status(201).json({ token: token });
    }
    return {
        loginAccount
    }
}
module.exports = AuthenticationController;