function isValid(input, min, max, criteria, warningTolerance) {
    if (input < min || input > max) {
        console.log(`${criteria} is out of range!`);
        return false;
    }
    else if (input < min + warningTolerance) {
        console.log(`Warning: ${criteria} is approaching lower limit!`);
        return true;
    }
    else if ( input > max - warningTolerance) {
        console.log(`Warning: ${criteria} is approaching upper limit!`);
        return true;
    }
    return true;
}

module.exports=isValid;