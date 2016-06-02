Determine which number is the greatest in an array.

Rules
-----

* If the supplied argument is not an array, throw a TypeError
* If the array is empty return null.
* If the number is not a number throw a TypeError (numeric strings are supported, NaN is not)
* The result is cast

```javascript
// version 1.0.0

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
```
