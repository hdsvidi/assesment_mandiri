const Province = require('../model.province');

module.exports = ProvinceDto = (result, index = 0) => {
    return Province(
        result.rows[index].id,
        result.rows[index].name,
        result.rows[index].created_at,
        result.rows[index].updated_at
    )
}