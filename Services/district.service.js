const DistrictRepository = require('../Repository/district.repository');

const DistrictService = () =>{

    const findDistrict = async (id)=>{
        try{
            return await DistrictRepository().select(id);
        }
        catch(err){
            throw err;
        }
        
    }

    const findDistrictByIdRegency = async (id)=>{
        try{
            return await DistrictRepository().selectByIdRegency(id);
        }
        catch(err){
            throw err;
        }
        
    }

    const insertDistrict = async data => {
        try{
            return await DistrictRepository().insert(data);
        }
        catch(err){
            throw err;
        }
    }
    
    const updateDistrict = async newData=>{
        try{
            return await DistrictRepository().update(newData);
        }
        catch(err){
            throw err;
        }
        
    }
    
    const removeDistrict = async id => {
        try{
            return await DistrictRepository().cut(id);
        }
        catch(err){
            throw err;
        }
    }

    return{
        findDistrict, removeDistrict, updateDistrict, insertDistrict, findDistrictByIdRegency
    }
}

module.exports = DistrictService;