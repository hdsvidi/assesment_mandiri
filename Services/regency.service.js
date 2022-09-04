const RegencyRepository = require('../Repository/regency.repository');

const RegencyService = () =>{

    const findRegency = async (id)=>{
        try{
            return await RegencyRepository().select(id);
        }
        catch(err){
            throw err;
        }
        
    }
    

    const findRegencyByIdProvince = async (id)=>{
        try{
            return await RegencyRepository().selectByIdProvince(id);
        }
        catch(err){
            throw err;
        }
        
    }

    const insertRegency = async data => {
        try{
            return await RegencyRepository().insert(data);
        }
        catch(err){
            throw err;
        }
    }
    
    const updateRegency = async newData=>{
        try{
            return await RegencyRepository().update(newData);
        }
        catch(err){
            throw err;
        }
        
    }
    
    const removeRegency = async id => {
        try{
            return await RegencyRepository().cut(id);
        }
        catch(err){
            throw err;
        }
    }

    return{
        findRegency,removeRegency, insertRegency, updateRegency, findRegencyByIdProvince
    }
}

module.exports = RegencyService;