var isNumber = require('is-number');

module.exports = function greatestNumberInArray(array) {
    if (! Array.isArray(array)) {
        throw TypeError('greatest-number-in-array: Can not find greatest number in non array');
    }

    var greatest = null;

    for (var i = 0; i < array.length; i++) {
        if (! isNumber(array[i])) {
            throw TypeError('greatest-number-in-array: Value at index ' + i + ' is not a number');
        }

        var value = Number(array[i]);

        if (greatest === null || value > greatest) {
            greatest = value;
        }
    }

    return greatest;
}
