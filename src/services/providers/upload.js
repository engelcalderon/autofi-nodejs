const Service = require('../../classes/Service');
const { parseCsv, parseWithProviderConfiguration } = require('../../util/data');
const { makeHttpResponse } = require('../../util/api');
const providersConfig = require('../../util/providersConfig');

class ProvidersUpload extends Service {

    constructor() {
        super();
    }

    validate(data) {
        const { provider, ...rest } = data;

        const providerConfig = providersConfig.find(p => p.name === provider);

        return { ...rest, provider: providerConfig };
    }

    executeService(data) {
        const { file, provider } = data;
        return parseCsv(file)
            .then(_data => {
                const data = _data.map(d => parseWithProviderConfiguration(d, provider.configuration));
                return makeHttpResponse({ statusCode: 201, data: data });
            });
    }

};

module.exports = ProvidersUpload;