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

module.exports = {
    parseCsv
}