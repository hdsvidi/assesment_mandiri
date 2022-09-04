const jwt = require('jsonwebtoken');
const userService = require('./user.service')
const {findUserByUsernamePassword} = userService();
const config = require('../configuration/configuration');

const AuthenticationService = () => {
    const login = async (payload) => {

        const user =
            await findUserByUsernamePassword(
                payload.username,
                payload.password
            );
        if (!user) return `Invalid account!`;

        // TOKEN
        const {TSecret, TExpiration, TAlgorithm} = config();

        const token = jwt.sign({
            username: user.username,
            email: user.password,
        }, TSecret, {expiresIn: TExpiration/*, algorithm: TOKEN_ALGORITHM*/}, null);
        return token;
    }

    const logout = () => {}
    const forgotPassword = () => {}
    return {
        login, logout, forgotPassword
    }
}
module.exports = AuthenticationService;