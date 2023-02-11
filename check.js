const lang = require('./language');

function isValid(input, min, max, criteria, unit="") {
    let comparisonInput = input;
    if (unit === "Fahrenheit") {
    comparisonInput = (input - 32) * (5 / 9);
    }
    if (comparisonInput < min || comparisonInput > max) {
        console.log(lang.outOfRange(criteria));
        return false;
    }
    return true;
}

module.exports=isValid;