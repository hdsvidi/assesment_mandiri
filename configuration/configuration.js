const dotenv = require('dotenv');
const config = () => {
    dotenv.config();
    return {
        host: process.env.APP_HOST || 'localhost',
        port: process.env.APP_PORT || '8181',
        dbHost: process.env.DB_HOST || 'localhost',
        dbPort: process.env.DB_PORT || '5342',
        dbUser: process.env.DB_USER || 'vide',
        dbPassword: process.env.DB_PASSWORD || 'victoriacoren',
        dbName: process.env.DB_NAME || 'employee',
        dbDriver: process.env.DB_DRIVER || 'postgresql',
        TSecret: process.env.TOKEN_SECRET,
        TAlgorithm: process.env.TOKEN_ALGORITHM,
        TExpiration: process.env.TOKEN_EXPIRATION
    }
}
module.exports = config;