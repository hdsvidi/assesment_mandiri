module.exports = RegencyQuery = ()=>{
    const SELECT_ALL = 'select * from regency';
    const SELECT_BY_ID = 'select * from regency where id = $1';
    const SELECT_BY_ID_PROVINCE = 'select * from regency where province_id= $1';
    const INSERT_INTO = 'insert into regency (id, name, province_id, created_at) values($1,$2,$3, $4) returning *';
    const UPDATE = 'update regency set name = $1 , province_id= $2, updated_at = $4 where id = $3 returning *';
    const DELETE = 'delete from regency where id = $1 returning *';

    return {
        SELECT_ALL, SELECT_BY_ID, INSERT_INTO, UPDATE, DELETE, SELECT_BY_ID_PROVINCE
    }
}