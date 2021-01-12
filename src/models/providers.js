const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Schema = mongoose.Schema;

const ProviderSchema = new Schema({
    uuid: {
        type: String,
        unique: true,
        default: uuidv4
    },
    vin: {
        type: String,
        default: ''
    },
    make: {
        type: String,
        default: ''
    },
    model: {
        type: String,
        default: ''
    },
    mileage: {
        type: String,
        default: ''
    },
    year: {
        type: String,
        default: ''
    },
    price: {
        type: String,
        default: ''
    },
    zipCode: {
        type: String,
        default: ''
    },
    createDate: {
        type: String,
        default: ''
    },
    updateDate: {
        type: String,
        default: ''
    }
});

const ProviderModel = mongoose.model('provider', ProviderSchema);

module.exports = ProviderModel;