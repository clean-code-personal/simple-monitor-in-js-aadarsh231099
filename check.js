const lang = require('./language');

function isValid(input, min, max, criteria, warningTolerance) {
    if (input < min || input > max) {
        console.log(lang.outOfRange(criteria));
        return false;
    }
    return true;
}

module.exports=isValid;