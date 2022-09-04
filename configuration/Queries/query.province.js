module.exports = ProvinceQuery = () => {
    const SELECT_ALL = 'select * from province';
    const SELECT_BY_ID = 'select * from province where id = $1';
    const INSERT_INTO = 'insert into province (id, name, created_at) values($1,$2,$3) returning *';
    const UPDATE = 'update province set name = $1, updated_at = $3 where id = $2 returning *';
    const DELETE = 'delete from province where id = $1 returning *';

    return {
        SELECT_ALL, SELECT_BY_ID, INSERT_INTO, UPDATE, DELETE
    }
    
}
