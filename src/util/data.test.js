const { expect } = require('chai');
const { parseWithProviderConfiguration } = require('./data');
const providersConfig = require('./providersConfig');


describe('data utils', () => {
    describe('parseWithProviderConfiguration()', () => {
        it('should parse and return only columns from Provider 1: ignore vin, zip code', () => {
            const dataProviderOne = {
                UUID: '1234',
                vin: '4343',
                Make: 'GMC',
                Model: '1500 Club Coupe',
                Mileage: '250000',
                Year: '1999',
                Price: '5000',
                'zip code': '90003',
                'Create Date': '1/8/2021',
                'Update Date': '1/9/2021'
            };
            const providerOne = providersConfig[0];
            const fn = parseWithProviderConfiguration(dataProviderOne, providerOne.configuration);
            expect(fn).to.not.have.property('vin');
            expect(fn).to.not.have.property('zipCode');
            expect(fn).to.have.property('model', '1500 Club Coupe');
        });

        it('should parse and return only columns from Provider 2: ignore Mileage, Make', () => {
            const dataProviderTwo = {
                uuid: '7890',
                vin: '4343',
                Make: 'Chevrolet',
                model: 'Chevelle Malibu',
                Mileage: '500000',
                year: '1964',
                price: '10000',
                zipcode: '37066',
                createdate: '2/10/2021',
                updatedate: '2/10/2021'
            };
            const providerTwo = providersConfig[1];
            const fn = parseWithProviderConfiguration(dataProviderTwo, providerTwo.configuration);
            expect(fn).to.not.have.property('mileage');
            expect(fn).to.not.have.property('make');
            expect(fn).to.have.property('vin', '4343');
        });
    });
});