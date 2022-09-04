const express = require('express');
const router = express.Router();

const ProvinceRoute = ProvinceController =>{
    router.post('/', ProvinceController().addDataProvince);
    router.get('/:id', ProvinceController().getDataProvince);
    router.get('/', ProvinceController().getDataProvince);
    router.put('/', ProvinceController().updateDataProvince);
    router.delete('/:id', ProvinceController().removeDataProvince);

    return router;
}

module.exports = ProvinceRoute;