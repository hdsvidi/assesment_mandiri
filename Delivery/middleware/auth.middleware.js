const  jwt  = require('jsonwebtoken');
const config = require('../../configuration/configuration')

const AuthMiddleware = (req, res, next) => {

    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({
                "message": "Unauthorized"
            })
        }
        const token = authHeader.replace("Bearer ","")

        if (!token) {
            return res.status(401).json({
                "message": "Token incorrect!"
            })
        }
        jwt.verify(token, config().TSecret);
        next();
    } catch (err) {
        res.status(401).json({
            "message": err.message
        })
    }
}
module.exports = AuthMiddleware;