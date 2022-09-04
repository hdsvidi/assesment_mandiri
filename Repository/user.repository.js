const UserDto = require('../model/DTO/dto.users');
const {pool} = require('../configuration/db-connection');
const UserQuery = require('../configuration/Queries/query.user');
const {passwordUtil, passwordCompare} = require('../utils/password.util')


const UserRepository = () => {

    const register = async (payload) => {
        try {
            const password = await passwordUtil(payload.password);
            const result = await pool.query(
                UserQuery().INSERT_USER,[
                    payload.username,
                    password
                ]);
            return UserDto(result);
        } catch (err) {
            throw err.message
        }
    }

    const getById = async (id) => {
        try {
            const result = await pool.query(UserQuery().SELECT_BY_ID, [id]);
            return result.rows[0]
        } catch (err) {
            throw err.message
        }
    };

    const getUserByUsernamePassword = async (username, password) => {
        try {
            const result = await pool.query(UserQuery().SELECT_USER, [username]);
            if (result.rowCount === 0) {
                return null;
            }
            const validPassword = await passwordCompare(password, result.rows[0].password);
            if (!validPassword) {
                return null;
            }
            return await getById(result.rows[0].id)
 
        } catch (err) {
            throw err.message
        }
    }

    return {
        register, getUserByUsernamePassword
    }
}

module.exports = UserRepository;