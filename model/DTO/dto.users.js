const User = require('../model.users');

module.exports = UserDto = (result, index = 0) => {
    return User(
        result.rows[index].username
    )
}