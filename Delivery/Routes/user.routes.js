const express = require('express');
const router = express.Router();

const UserRoute = (UserController) =>{
    const {add} = UserController();
    router.post('/', add);
    return router;
}

module.exports = UserRoute;