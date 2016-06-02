Determine which number is the greatest in an array.

Usage
-----

```bash
npm install --save greatest-number-in-array
```

```javascript
var greatestNumberInArray = require('greatest-number-in-array');

greatestNumberInArray([1, 5, 2, 10]); // 10
```

Rules
-----

* If the supplied argument is not an array, throw a TypeError
* If the array is empty return null.
* If the number is not a number throw a TypeError (numeric strings are supported, NaN is not)
* The result is cast

Code
----

```javascript
// version 3.0.0

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
