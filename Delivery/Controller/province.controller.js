const Response =require('../../utils/Response');
const ProvinceService = require('../../Services/province.service');

const ProvinceController = ()=>{


    const getDataProvince = async (req, res)=>{
        try{
            const id = req.params.id;
            const result = await ProvinceService().findProvince(id);
            res.json(Response().successMessage(res.statusCode, "SUCCESS GET",result));
        }
        catch(err){
            res.json(Response().errorMessage(res.statusCode, err.detail));
        }
        
    }

    const addDataProvince = async (req, res)=>{
        try{
        const payload = req.body;
        const result = await ProvinceService().insertProvince(payload);
        res.json(Response().successMessage(res.statusCode, "SUCCESS ADD",result));
        }
        catch(err){
        console.log(err)
        res.json(Response().errorMessage(res.statusCode, err.detail));
        }
    }
    
    const updateDataProvince = async (req, res)=>{
        try{
        const newData = req.body
        const result = await ProvinceService().updateProvince(newData);
        res.json(Response().successMessage(res.statusCode, "SUCCESS UPDATE",result));
        }
        catch(err){
        res.json(Response().errorMessage(res.statusCode, err.detail));
        }
    }
    
    const removeDataProvince = async (req, res)=>{
        try{
        const id = req.params.id
        const result =  cutProvince(id);
        res.json(Response().successMessage(res.statusCode,"SUCCESS DELETE", result));
        }
        catch(err){
        res.json(Response().errorMessage(res.statusCode,err.detail));
        }
    }    

    return {
        getDataProvince, addDataProvince, updateDataProvince, removeDataProvince
    }

}

module.exports = ProvinceController;