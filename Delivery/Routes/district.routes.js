const express = require('express');
const router = express.Router();

const DistrictRoute = DistrictController =>{
    router.post('/', DistrictController().addDataDistrict);
    router.get('/', DistrictController().getDataDistrict);
    router.get('/:id', DistrictController().getDataDistrict);
    router.get('/regency/:id', DistrictController().getDataDistrictByIdRegency);
    router.put('/', DistrictController().updateDataDistrict);
    router.delete('/:id', DistrictController().removeDataDistrict);

    return router;
}

module.exports = DistrictRoute;