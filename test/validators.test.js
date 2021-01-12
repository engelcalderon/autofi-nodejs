const { expect } = require('chai');
const { required, isNotNull } = require('../src/util/validators');


describe('validators utils', () => {
    describe('requiredField()', () => {
        it('should not allow undefined', () => {
            const data = { file: undefined };
            expect(() => required(data, 'file')).to.throw('The field "file" is required.');
        });
        it('should not allow null', () => {
            const data = { file: null };
            expect(() => required(data, 'file')).to.throw('The field "file" is required.');
        });
        it('should not allow empty string', () => {
            const data = { provider: '' };
            expect(() => required(data, 'provider')).to.throw('The field "provider" is required.');
        });
        it('should allow empty object', () => {
            const data = { file: {} };
            expect(() => required(data, 'file')).not.to.throw();
        });
    });

    describe('isNotNull()', () => {
        it('should not allow undefined', () => {
            let elem = undefined;
            expect(() => isNotNull(elem, 'Element does not exist.')).to.throw('Element does not exist.');
        });
        it('should not allow null', () => {
            let elem = null;
            expect(() => isNotNull(elem, 'Element does not exist.')).to.throw('Element does not exist.');
        });
        it('should allow empty object', () => {
            let elem = {};
            expect(() => isNotNull(elem, '')).not.to.throw();
        });
    });
});