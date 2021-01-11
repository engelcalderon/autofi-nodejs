const Service = require('../../classes/Service');
const { makeHttpResponse } = require('../../util/api');


class ProvidersUpload extends Service {

    constructor() {
        super();
    }

    validate(data) {
        return data;
    }

    executeService(data) {
        return Promise.resolve(makeHttpResponse({ statusCode: 201, data: { ok: 'ok' } }));
    }

};

module.exports = ProvidersUpload;