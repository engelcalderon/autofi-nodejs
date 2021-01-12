const Service = require('../../classes/Service');
const { parseCsv } = require('../../util/data');
const { makeHttpResponse } = require('../../util/api');


class ProvidersUpload extends Service {

    constructor() {
        super();
    }

    validate(data) {
        return data;
    }

    executeService(data) {
        const { file, provider } = data;
        return parseCsv(file)
            .then(data => {
                return makeHttpResponse({ statusCode: 201, data: data });
            });
    }

};

module.exports = ProvidersUpload;