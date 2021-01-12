const ApiError = require('../classes/ApiError');

/**
 * Makes sure we have a field inside an object, throws an error
 * if this does not exist.
 * 
 * @param {Object} data - object with which we compare 
 * @param {String} name - name of field to search in the object
 */
const required = (data, name) => {
    if (!data[name]) throw new ApiError({
        statusCode: 400,
        code: 'validation-required-field',
        title: 'Missing required field',
        detail: `The field "${name}" is required.`
    });
};

/**
 * Makes sure an element is not null. Throws an error if it's null
 * 
 * @param {*} elm - element to check their existence
 * @param {String} message - an error message if the element is null
 */
const isNotNull = (elm, message) => {
    if (!elm) throw new ApiError({
        statusCode: 404,
        code: 'validation-invalid-resource',
        title: 'Invalid resource',
        detail: message
    });
};

module.exports = {
    required,
    isNotNull
}