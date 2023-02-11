const lang = require('./language');

const tolerance = 0.05;

function isValid(input, min, max, criteria) {
    if (input < min || input > max) {
        return {
            status: false,
            message: lang.outOfRange(criteria),
            level: 'error'
        };
    } else if (input < min + (max - min) * tolerance || input > max - (max - min) * tolerance) {
        return {
            status: true,
            message: lang.warning(criteria),
            level: 'warning'
        };
    }
    return {
        status: true,
        message: lang.inRange(criteria),
        level: 'info'
    };
}
module.exports=isValid;