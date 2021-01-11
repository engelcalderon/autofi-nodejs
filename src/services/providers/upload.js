const Service = require('../../classes/Service');

class ProvidersUpload extends Service {

    constructor() {
        super();
    }

    validate(data) {
        return data;
    }

    executeService(data) {
    }

};

module.exports = ProvidersUpload;