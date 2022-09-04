const {Pool} = require('pg');
const config = require('./configuration')

const {dbHost, dbPort, dbUser, dbPassword, dbName} = config()

const pool = new Pool({
    "host" : dbHost,
    "port" : dbPort,
    "user" : dbUser,
    "password" : dbPassword,
    "database" : dbName
});

module.exports = {pool};
