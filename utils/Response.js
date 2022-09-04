const Response = ()=>{
    const successMessage = (code, message, data) =>({
        code : code,
        message : message,
        data : data
    })

    const errorMessage = (code, message) =>({
        code : code,
        message : message
    })

    return {
        successMessage, errorMessage
    }
}

module.exports = Response;