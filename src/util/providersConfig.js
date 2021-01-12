/**
 * We use the value for each property of the configuration
 * to define the column names we are going to read
 * later from the CSV files.
 * 
 * The configuration schema needs to match the provider model
 */
const providers = [
    {
        name: 'Provider 1',
        configuration: {
            uuid: 'UUID',
            vin: 'VIN',
            make: 'Make',
            model: 'Model',
            mileage: 'Mileage',
            year: 'Year',
            price: 'Price',
            zipCode: 'Zip Code',
            createDate: 'Create Date',
            updateDate: 'Update Date'
        }
    },
    {
        name: 'Provider 2',
        configuration: {
            uuid: 'uuid',
            vin: 'vin',
            make: 'make',
            model: 'model',
            mileage: 'mileage',
            year: 'year',
            price: 'price',
            zipCode: 'zipcode',
            createDate: 'createdate',
            updateDate: 'updatedate'
        }
    }
];

module.exports = providers;