const ProvinceDto = require('../model/DTO/dto.province');
const {pool} = require('../configuration/db-connection');
const ProvinceQuery = require('../configuration/Queries/query.province');

const ProvinceRepository = () => {

    const select = async id =>{
        if(id){
            try{
                const result = await pool.query(ProvinceQuery().SELECT_BY_ID,[id]);
                return ProvinceDto(result);
            }
            catch(err){
                throw err;
            }
        }
        try{
            const result = await pool.query(ProvinceQuery().SELECT_ALL);
            const province = []
                for(let i = 0; i < result.rows.length; i++){
                    province.push(ProvinceDto(result,i))
                }
            return province
        }
        catch(err){
            throw err
        }
    }

    const  insert = async data => {
        try{
            const result = await pool.query(ProvinceQuery().INSERT_INTO,[data.id, data.name, new Date()]);
            return ProvinceDto(result);
        }
        catch(err){
            throw err
        }
    }
    
    const update = async data => {
        try{
            const result = await pool.query(ProvinceQuery().UPDATE,[data.name, data.id, new Date()]);
            return ProvinceDto(result)
        }
        catch(err){
            throw err
        }
        
    }
    
    const cut = async id => {
        try{
            const result = await pool.query(ProvinceQuery().DELETE,[id]);
            return ProvinceDto(result);
        }
        catch(err){
            throw err
        }
        
    }

    return {
        select, insert, update, cut
    }
}

module.exports = ProvinceRepository;