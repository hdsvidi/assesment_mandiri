const express = require('express');
const config = require('../configuration/configuration');
const router = require('./Routes/index.routes');

const Server = () =>{
    const {port} = config();
    const app = express();
    app.use(express.json())
    app.use(router);
    app.listen(port, () => {
        console.info(`Server is Run on port ${port}`);
    })
}

module.exports = Server;