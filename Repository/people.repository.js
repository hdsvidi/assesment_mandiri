const {pool} = require('../configuration/db-connection');

const ProvinceQuery = require('../configuration/Queries/query.province')
const RegencyQuery = require('../configuration/Queries/query.regency');
const DistrictQuery = require('../configuration/Queries/query.district');
const PeopleQuery = require('../configuration/Queries/query.people')

const generateNIK = require('../utils/generatesNIK');

const ProvinceDto = require('../model/DTO/dto.province');
const RegencyDto = require('../model/DTO/dto.regency');
const DistrictDto = require('../model/DTO/dto.district');
const DtoPeople = require('../model/DTO/dto.people');

const PeopleRepository = () => {

    const select = async (id,nik) =>{
        if(id){
            try{
                const result = await pool.query(PeopleQuery().SELECT_BY_ID,[id]);
                const people = DtoPeople(result);
                const dataDistrict = await pool.query(DistrictQuery().SELECT_BY_ID,[people.district_id]);
                const dataRegency = await pool.query(RegencyQuery().SELECT_BY_ID,[people.regency_id]);
                const dataProvince = await pool.query(ProvinceQuery().SELECT_BY_ID,[people.province_id]);
                people.district_id = DistrictDto(dataDistrict)
                people.regency_id = RegencyDto(dataRegency);
                people.province_id = ProvinceDto(dataProvince);
                return people
            }
            catch(err){
                throw err;
            }
        }
        if(nik){
            try{
                const result = await pool.query(PeopleQuery().SELECT_BY_NIK,[nik]);
                const people = DtoPeople(result);
                const dataDistrict = await pool.query(DistrictQuery().SELECT_BY_ID,[people.district_id]);
                const dataRegency = await pool.query(RegencyQuery().SELECT_BY_ID,[people.regency_id]);
                const dataProvince = await pool.query(ProvinceQuery().SELECT_BY_ID,[people.province_id]);
                people.district_id = DistrictDto(dataDistrict);
                people.regency_id = RegencyDto(dataRegency);
                people.province_id = ProvinceDto(dataProvince);
                return people
            }
            catch(err){
                throw err;
            }
        }
        try{
            const result = await pool.query(PeopleQuery().SELECT);
            const people = [];
                for(let i = 0; i < result.rows.length; i++){
                    people.push(DtoPeople(result,i));
                }
            return people;
        }
        catch(err){
            throw err
        }
    }

    const search = async (id,nik) =>{
        if(id){
            try{
                const result = await pool.query(PeopleQuery().SELECT_BY_ID,[id]);
                const people = DtoPeople(result);
                const dataDistrict = await pool.query(DistrictQuery().SELECT_BY_ID,[people.district_id]);
                const dataRegency = await pool.query(RegencyQuery().SELECT_BY_ID,[people.regency_id]);
                const dataProvince = await pool.query(ProvinceQuery().SELECT_BY_ID,[people.province_id]);
                people.district_id = DistrictDto(dataDistrict)
                people.regency_id = RegencyDto(dataRegency);
                people.province_id = ProvinceDto(dataProvince);
                return people
            }
            catch(err){
                throw err;
            }
        }
    }
    
    const getByNIK = async nik=>{
        try{

            const result = await pool.query(PeopleQuery().SELECT_BY_NIK,[nik]);
            return DtoPeople(result);
        }
        catch(err){
            throw err
        }
        
    }
    
    const insert = async data => {
        try{
            const result = await pool.query(PeopleQuery().INSERT,
                [data.id, data.nik, data.name,
                    data.gender, data.dob, data.pob,
                    data.province_id, data.regency_id,
                    data.district_id,new Date()]);
            return DtoPeople(result)
        }
        catch(err){
            throw err;
        }
    }
    
    
    const cut = async id=>{
        try{
            const result = await pool.query(PeopleQuery().DELETE,[id]);
            return DtoPeople(result);
        }
        catch(err){
            throw err;
        }
        
    }
    
    const getPeopleData = async data => {
        let peopleData = {...data};
        let result = {...data};
        const NIK = generateNIK(result);
        peopleData.nik = NIK
        return peopleData;
    }

    return {
        select, getByNIK, insert, cut, getPeopleData
    }
    
    

}

module.exports = PeopleRepository;