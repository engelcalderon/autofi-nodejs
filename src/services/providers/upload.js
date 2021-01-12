const Service = require('../../classes/Service');
const ProviderModel = require('../../models/providers');
const { parseCsv, parseWithProviderConfiguration } = require('../../util/data');
const { makeHttpResponse } = require('../../util/api');
const { required, isNotNull } = require('../../util/validators');
const providersConfig = require('../../util/providersConfig');

class ProvidersUpload extends Service {

    constructor() {
        super();
    }

    validate(data) {
        const { provider, ...rest } = data;

        required(data, 'file');
        required(data, 'provider');

        const providerConfig = providersConfig.find(p => p.name === provider);

        isNotNull(providerConfig, `Provider with the name of "${provider}" does not exist.`);

        return { ...rest, provider: providerConfig };
    }

    executeService(data) {
        const { file, provider } = data;
        return parseCsv(file)
            .then(_data => {
                const data = _data.map(d => parseWithProviderConfiguration(d, provider.configuration));
                return ProviderModel
                    .insertMany(data)
                    .then(result => makeHttpResponse({ statusCode: 201, data: result }));
            });
    }

};

module.exports = ProvidersUpload;