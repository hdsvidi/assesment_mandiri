const PeopleRepository = require('../Repository/people.repository');
const PeopleService = () =>{

    const findPeople = async (id,nik) =>{
        try{
            return await PeopleRepository().select(id,nik);
        }
        catch(err){
            throw err;
        }
        
    }

    const searchPeople = async (province,regency,district) =>{
        try{
            return await PeopleRepository().search(province, regency, district);
        }
        catch(err){
            throw err;
        }
        
    }

    const insertPeople = async data => {
        try{
            return await PeopleRepository().insert(data)
        }
        catch(err){
            throw err;
        }
    }
    
    const updatePeople = async newData => {
        try{
            return await PeopleRepository().update(newData)
        }
        catch(err){
            throw err;
        }
        
    }
    
    const removePeople = async id => {
        try{
            return await PeopleRepository().cut(id);
        }
        catch(err){
            throw err;
        }
    }

    const findByNIK = async nik => {
        try{
            return await PeopleRepository().getByNIK(nik)
        }
        catch(err){
            throw err
        }
    }

    return{
        findPeople, insertPeople, removePeople, updatePeople, findByNIK, searchPeople
    }
}

module.exports = PeopleService