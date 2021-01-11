const { v4: uuidv4 } = require('uuid');

/**
 * Creates a success response
 * 
 * @param {Object} - statusCode, data with results of the request
 */
const makeHttpResponse = ({ statusCode, data }) => {
    return {
        statusCode,
        response: {
            data,
        }
    }
}

/**
 * Creates a proper response to explain an error
 * 
 * @param {Object} - statusCode, code, title, details
 */
const makeHttpError = ({ statusCode, code, title, detail }) => {
    return {
        id: uuidv4(),
        status: statusCode.toString(),
        code,
        title,
        detail
    }
};

module.exports = {
    makeHttpResponse,
    makeHttpError
}