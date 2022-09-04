const express = require('express');
const router = express.Router();

const RegencyRoute = RegencyController =>{
    router.post('/', RegencyController().addDataRegency);
    router.get('/', RegencyController().getDataRegency);
    router.get('/:id', RegencyController().getDataRegency);
    router.get('/province/:id', RegencyController().getDataRegencyByIdProvince);
    router.put('/', RegencyController().updateDataRegency);
    router.delete('/:id', RegencyController().removeDataRegency);

    return router;
}

module.exports = RegencyRoute;