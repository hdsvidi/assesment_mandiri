const {pool} = require('../configuration/db-connection');
const RegencyDto = require('../model/DTO/dto.regency');
const ProvinceDto = require('../model/DTO/dto.province')
const RegencyQuery = require('../configuration/Queries/query.regency');
const ProvinceQuery = require('../configuration/Queries/query.province');

const RegencyRepository = () => {

    const select = async id =>{
        if(id){
            try{
                const result = await pool.query(RegencyQuery().SELECT_BY_ID,[id]);
                const regency = RegencyDto(result);
                const dataProvince = await pool.query(ProvinceQuery().SELECT_BY_ID,[regency.province_id]);
                regency.dataProvince = ProvinceDto(dataProvince);
                return regency
            }
            catch(err){
                throw err;
            }
            
        }
        try{
            const result = await pool.query(RegencyQuery().SELECT_ALL);
            const regency = []
                    for(let i = 0; i < result.rows.length; i++){
                        regency.push(RegencyDto(result,i))
                    }
            return regency;
        }
        catch(err){
            throw err;
        }
    }

    const selectByIdProvince = async id =>{
        try{
            const result = await pool.query(RegencyQuery().SELECT_BY_ID_PROVINCE,[id]);
            const regency = []
                    for(let i = 0; i < result.rows.length; i++){
                        regency.push(RegencyDto(result,i))
                    }
            return regency;

        }
        catch(err){
            throw err;
        }
       
        }

    const insert = async data => {
        try{
            const result = await pool.query(RegencyQuery().INSERT_INTO,[data.id, data.name, data.province_id, new Date()]);
            return RegencyDto(result);
        }
        catch(err){
            throw err;
        }
        
    }
    
    const update = async data => {
        try{
            const result = await pool.query(RegencyQuery().UPDATE,[data.name, data.province_id, data.id, new Date()]);
            return RegencyDto(result);
        }
        catch(err){
            throw err;
        }
        
    }
    
    
    const cut = async id => {
        try{
            const result = await pool.query(RegencyQuery().DELETE,[id]);
            return RegencyDto(result);
        }
        catch(err){
            throw err;
        }
        
    }

    return {
        select,insert,update,cut,selectByIdProvince
    }
}

module.exports = RegencyRepository;
