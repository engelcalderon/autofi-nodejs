const { makeHttpError } = require('../util/api');

class ApiError extends Error {

    constructor({ statusCode, code, title, detail }) {
        super(detail);
        this.statusCode = statusCode;
        this.code = code;
        this.name = title;
        this.message = detail;

        this.makeHttpError = this.makeHttpError.bind(this);
    };

    makeHttpError() {
        return makeHttpError({
            statusCode: this.statusCode,
            code: this.code,
            title: this.name,
            detail: this.message
        });
    }
}

module.exports = ApiError;