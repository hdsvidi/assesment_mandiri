const PeopleService = require("../../Services/people.service");
const Response = require("../../utils/Response");

const PeopleController = () => {
    const getDataPeople = async (req, res)=>{
        try{
            const id = req.params.id;
            const nik = req.query.nik;
            const result = await PeopleService().findPeople(id, nik);
            res.json(Response().successMessage(res.statusCode, "Success GET",result));
        }
        catch(err){
            res.json(Response().errorMessage(res.statusCode, [err.name, err.detail]));
        }
        
    }

    const searchDataPeople = async (req, res)=>{
        try{
            const province = req.query.province;
            const regency = req.query.regency;
            const district = req.query.district;
            const result = await PeopleService().searchPeople(province, regency, district);
            res.json(Response().successMessage(res.statusCode, "Success GET",result));
        }
        catch(err){
            res.json(Response().errorMessage(res.statusCode, [err.name, err.detail]));
        }
        
    }
    
    const getDataByNIK = async (req, res)=>{
        try{
            const nik = req.params.nik;
            const result = await PeopleService().findByNIK(nik);
            res.json(Response().successMessage(res.statusCode, "Success GET",result));
        }
        catch(err){
            res.json(Response().errorMessage(res.statusCode, [err.name, err.detail]));
        }
    }
    
    const insertDataPeople = async function(req, res){
        try{
        const payload = req.body
        const peopleData = await PeopleService().getPeopleData(payload);
        const result = await PeopleService().insertPeople(peopleData);
        res.json(Response().successMessage(res.statusCode, "Success ADD",result));
        }
        catch(err){
        res.json(Response().errorMessage(res.statusCode, [err.name, err.detail]));
        }
    }
      
    const removeDataPeople = async function(req, res){
        try{
        const id = req.params.id
        const result = await PeopleService().removePeople(id);
        res.json(Response().successMessage(res.statusCode,"Success DELETE", result));
        }
        catch(err){
        res.json(Response().errorMessage(res.statusCode, [err.name, err.detail]));
        }
    }

    return {
        getDataPeople, getDataByNIK, insertDataPeople, removeDataPeople, searchDataPeople
    }

}


module.exports = PeopleController;