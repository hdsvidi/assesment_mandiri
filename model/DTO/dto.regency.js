const Regency = require('../model.regency');

module.exports = RegencyDto = (result, index = 0) => {
    return Regency(
        result.rows[index].id,
        result.rows[index].name,
        result.rows[index].province_id,
        result.rows[index].created_at,
        result.rows[index].updated_at
    )
}