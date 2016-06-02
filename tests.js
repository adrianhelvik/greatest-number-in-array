var chai = require('chai');
var expect = chai.expect;
var greatestNumberInArray = require('./index');

// numeric array
expect(greatestNumberInArray([1, 3, 2])).to.equal(3);
expect(greatestNumberInArray([1, 2, '3', -1])).to.equal(3);

// non-array
expect(() => greatestNumberInArray()).to.throw(TypeError);
expect(() => greatestNumberInArray('hello')).to.throw(TypeError);
expect(() => greatestNumberInArray(NaN)).to.throw(TypeError);

// non-numeric array items
expect(() => greatestNumberInArray([NaN])).to.throw(TypeError);
