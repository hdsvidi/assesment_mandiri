const People = require('../model.people');

module.exports = DtoPeople = (result, index = 0) =>{
    return People (
        result.rows[index].id,
        result.rows[index].nik,
        result.rows[index].name,
        result.rows[index].gender,
        result.rows[index].dob,
        result.rows[index].pob,
        result.rows[index].province_id,
        result.rows[index].regency_id,
        result.rows[index].district_id,
        result.rows[index].created_at
    )
}