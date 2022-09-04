const express = require('express');
const router = express.Router();

const PeopleRoute = PeopleController =>{
    router.post('/', PeopleController().insertDataPeople);
    router.get('/', PeopleController().getDataPeople);
    router.get('/:id', PeopleController().getDataPeople);
    router.delete('/:id', PeopleController().removeDataPeople);

    return router;
}

module.exports = PeopleRoute;