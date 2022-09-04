module.exports = UserQuery = () => {
    const INSERT_USER = 'insert into users (username, password) values ($1,$2) returning *'
    const SELECT_USER = 'select id, username, password from users where username=$1'
    const SELECT_BY_ID = 'select id, username, password from users where id = $1'

    return {
        INSERT_USER, SELECT_USER, SELECT_BY_ID
    }
}