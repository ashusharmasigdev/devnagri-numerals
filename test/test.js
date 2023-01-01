'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('Arabic to Devnagri Conversion', () => {

    it('should equal to ०', () => {
        var result = index.toDevnagriNumeral(0);
        expect(result).to.equal('०');
    });

    it('should equal to १३७९५८४', () => {
        var result = index.toDevnagriNumeral(1379584);
        expect(result).to.equal('१३७९५८४');
    });

    it('should equal to २', () => {
        var result = index.toDevnagriNumeral(2);
        expect(result).to.equal('२');
    });

});

describe('Devnagri to Arabic Conversion', () => {

    it('should equal to 0', () => {
        var result = index.toArabicNumeral('०');
        expect(result).to.equal(0);
    });

    it('should equal to 1379584', () => {
        var result = index.toArabicNumeral('१३७९५८४');
        expect(result).to.equal(1379584);
    });

    it('should equal to 2', () => {
        var result = index.toArabicNumeral('२');
        expect(result).to.equal(2);
    });

});