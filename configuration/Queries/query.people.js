module.exports = PeopleQuery = () =>{
    const SELECT = 'select * from people';
    const SELECT_BY_ID = 'select * from people where id = $1';
    const SELECT_BY_NIK = 'select * from people where nik = $1';
    const DELETE = 'delete from people where id = $1 returning *';
    const INSERT = `insert into people (id,nik, name,gender, dob,pob,province_id, regency_id,district_id,created_at)
                    values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning *`;

    return{
        SELECT, SELECT_BY_ID,SELECT_BY_NIK,DELETE,INSERT
    }
}


