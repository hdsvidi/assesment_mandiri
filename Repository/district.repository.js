const DistrictDto = require('../model/DTO/dto.district');
const RegencyDto =require('../model/DTO/dto.regency')
const {pool} = require('../configuration/db-connection');
const DistrictQuery = require('../configuration/Queries/query.district');
const RegencyQuery = require('../configuration/Queries/query.regency')


const DistrictRepository = () => {

    const select = async id =>{
        if(id){
            try{
                const result = await pool.query(DistrictQuery().SELECT_BY_ID,[id]);
                const district = DistrictDto(result);
                const dataRegency = await pool.query(RegencyQuery().SELECT_BY_ID,[district.regency_id]);
                district.dataRegency = RegencyDto(dataRegency);
                return district
            }
            catch(err){
                throw err;
            }
        }
        try{
            const result = await pool.query(DistrictQuery().SELECT_ALL);
            const district = []
                for(let i = 0; i < result.rows.length; i++){
                    district.push(DistrictDto(result,i))
                }
            return district
        }
        catch(err){
            throw err
        }
    }

    const selectByIdRegency = async id =>{
        try{
            const result = await pool.query(DistrictQuery().SELECT_BY_ID_REGENCY,[id]);
            const district = []
                for(let i = 0; i < result.rows.length; i++){
                    district.push(DistrictDto(result,i))
                }
            return district
        }
        catch(err){
            throw err
        }
    }

    const  insert = async data => {
        try{

            const result = await pool.query(DistrictQuery().INSERT,[data.id, data.name, data.regency_id, new Date()]);
            return DistrictDto(result);
        }
        catch(err){
            throw err;
        }
    }
    
    const update = async data => {
        try{
            const result = await pool.query(DistrictQuery().UPDATE,[data.name, data.regency_id, data.id, new Date()]);
            return DistrictDto(result)
        }
        catch(err){
            throw err;
        }
        
    }
    
    const cut = async id => {
        try{
            const result = await pool.query(DistrictQuery().DELETE,[id]);
            return DistrictDto(result);
        }
        catch(err){
            throw err;
        }
        
    }

    return {
        select, insert, update, cut, selectByIdRegency
    }
}

module.exports = DistrictRepository;