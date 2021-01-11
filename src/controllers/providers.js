const executeService = require('../util/service');

const ProvidersUpload = require('../services/providers/upload');

module.exports = {
    upload: executeService(ProvidersUpload, req => ({}))
}