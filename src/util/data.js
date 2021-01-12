const fs = require('fs');
const csv = require('csv-parser');

/**
 * Parse a CSV file and returns an array with the data
 * 
 * @param {Object} file - a valid csv file 
 */
const parseCsv = file => {
    const results = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(file.path)
            .pipe(csv())
            .on('data', data => results.push(data))
            .on('end', () => resolve(results))
            .on('error', reject);
    });
};

/**
 * Prepare data to insert in DB using a provider's configuration
 * 
 * @param {Object} data - an object with a provider's data
 * @param {Object} config - object with a provider's layout configuration
 */
const parseWithProviderConfiguration = (data, config) => {
    return Object.keys(config).reduce((row, key) => {
        const columnName = config[key];
        const currentColumn = data[columnName];
        if (currentColumn) return { ...row, [key]: currentColumn }
        return row;
    }, {});
};

module.exports = {
    parseCsv,
    parseWithProviderConfiguration
}