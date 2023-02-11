const lang = require('./language');

function isValid(input, min, max, criteria) {
    if (input < min || input > max) {
        console.log(lang.outOfRange(criteria));
        return false;
    }
    return true;
}

module.exports=isValid;