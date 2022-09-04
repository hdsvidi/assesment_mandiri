const DistrictService = require("../../Services/district.service");
const Response = require('../../utils/Response');

const DistrictController = () => {

    const getDataDistrict = async (req, res) => {
        try{
            const id = req.params.id;
            const result = await DistrictService().findDistrict(id);
            res.json(Response().successMessage(res.statusCode, "SUCCESS GET",result));
        }
        catch(err){
            res.json(Response().errorMessage(res.statusCode, [err.name, err.detail]));
        }
        
    }

    const getDataDistrictByIdRegency = async (req, res) => {
        try{
            const id = req.params.id;
            const result = await DistrictService().findDistrictByIdRegency(id);
            res.json(Response().successMessage(res.statusCode, "SUCCESS GET",result));
        }
        catch(err){
            res.json(Response().errorMessage(res.statusCode, [err.name, err.detail]));
        }
        
    }

    const addDataDistrict = async (req, res)=>{
        try{
        const payload = req.body;
        const result = await DistrictService().insertDistrict(payload);
        res.json(Response().successMessage(res.statusCode, "SUCCESS ADD",result));
        }
        catch(err){
        res.json(Response().errorMessage(res.statusCode, [err.name, err.detail]));
        }
    }

    const updateDataDistrict = async (req, res)=>{
        try{
        const newData = req.body
        const result = await DistrictService().updateDistrict(newData)
        res.json(Response().successMessage(res.statusCode, "SUCCESS UPDATE",result));
        }
        catch(err){
        res.json(Response().errorMessage(res.statusCode, [err.name, err.detail]));
        }
    }

    const removeDataDistrict = async (req, res)=>{
        try{
        const id = req.params.id;
        const result = await DistrictService().removeDistrict(id);
        res.json(Response().successMessage(res.statusCode, "Success DELETE ", result));
        }
        catch(err){
        res.json(Response().errorMessage(res.statusCode, [err.name, err.detail]));
        }
    }

    return {
        updateDataDistrict,addDataDistrict, removeDataDistrict, getDataDistrict, getDataDistrictByIdRegency
    }

}

module.exports = DistrictController;