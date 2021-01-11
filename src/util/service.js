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
    }
}

module.exports = executeService;