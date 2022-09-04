module.exports = DistrictQuery = () => {
    const SELECT_ALL = 'select * from district';
    const SELECT_BY_ID = 'select * from district where id = $1';
    const SELECT_BY_ID_REGENCY = 'select * from district where regency_id = $1';
    const INSERT = 'insert into district (id, name, regency_id, created_at) values($1,$2,$3, $4) returning *';
    const UPDATE = 'update district set name = $1 , regency_id = $2, updated_at = $4 where id = $3 returning *';
    const DELETE = 'delete from district where id = $1 returning *';

    return {
        SELECT_ALL, SELECT_BY_ID, INSERT, UPDATE, DELETE, SELECT_BY_ID_REGENCY
    }
}