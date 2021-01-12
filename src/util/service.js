const ApiError = require('../classes/ApiError');
const { makeHttpError } = require('./api');

/**
 * It takes care of creating and running a service for a Rest API call
 * 
 */
const executeService = (Service, fnGetData) => async (req, res) => {
    const data = fnGetData(req);
    const service = new Service();
    try {
        const result = await service.run(data);
        const { statusCode = 500, response = {} } = result || {};
        return res.status(statusCode).send(response);
    } catch (err) {

        let error;
        if (err instanceof ApiError) {
            error = err.makeHttpError();
        } else {
            error = makeHttpError({
                statusCode: 500,
                code: 'internal-error',
                title: 'Internal error',
                detail: err
            });
        }

        return res.status(error.status).send({ error });
    }
}

module.exports = executeService;