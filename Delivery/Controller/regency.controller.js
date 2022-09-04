const RegencyService = require("../../Services/regency.service");
const Response = require('../../utils/Response');

const RegencyController = () => {

    const getDataRegency = async (req, res) => {
        try{
            const id = req.params.id;
            const result = await RegencyService().findRegency(id);
            res.json(Response().successMessage(res.statusCode, "SUCCESS GET",result));
        }
        catch(err){
            res.json(Response().errorMessage(res.statusCode, [err.name, err.detail]));
        }
        
    }

    const getDataRegencyByIdProvince = async (req, res) => {
        try{
            const id = req.params.id;
            const result = await RegencyService().findRegencyByIdProvince(id);
            res.json(Response().successMessage(res.statusCode, "SUCCESS GET",result));
        }
        catch(err){
            res.json(Response().errorMessage(res.statusCode, [err.name, err.detail]));
        }
        
    }

    const addDataRegency = async (req, res)=>{
        try{
        const payload = req.body;
        const result = await RegencyService().insertRegency(payload);
        res.json(Response().successMessage(res.statusCode, "SUCCESS ADD",result));
        }
        catch(err){
        res.json(Response().errorMessage(res.statusCode, [err.name, err.detail]));
        }
    }

    const updateDataRegency = async (req, res)=>{
        try{
        const newData = req.body
        const result = await RegencyService().updateRegency(newData)
        res.json(Response().successMessage(res.statusCode, "SUCCESS UPDATE",result));
        }
        catch(err){
        res.json(Response().errorMessage(res.statusCode, [err.name, err.detail]));
        }
    }

    const removeDataRegency = async (req, res)=>{
        try{
        const id = req.params.id;
        const result = await RegencyService().removeRegency(id);
        res.json(Response().successMessage(res.statusCode, "Success DELETE ", result));
        }
        catch(err){
        res.json(Response().errorMessage(res.statusCode, [err.name, err.detail]));
        }
    }

    return {
        updateDataRegency,addDataRegency, removeDataRegency, getDataRegency, getDataRegencyByIdProvince
    }

}

module.exports = RegencyController;