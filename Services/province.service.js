const ProvinceRepository = require('../Repository/province.repository');

const ProvinceService = () =>{

    const findProvince = async id =>{
        try{
            return await ProvinceRepository().select(id);
        }
        catch(err){
            throw err;
        }
        
    }

    const insertProvince = async data => {
        try{
            return await ProvinceRepository().insert(data)
        }
        catch(err){
            throw err;
        }
    }
    
    const updateProvince = async newData => {
        try{
            return await ProvinceRepository().update(newData)
        }
        catch(err){
            throw err;
        }
        
    }
    
    const removeProvince = async id => {
        try{
            return await ProvinceRepository().cut(id);
        }
        catch(err){
            throw err;
        }
    }

    return{
        findProvince, insertProvince, removeProvince, updateProvince
    }
}

module.exports = ProvinceService