function isValid(input, min, max, criteria, warningTolerance) {
    if (input < min || input > max) {
        console.log(`${criteria} is out of range!`);
        return false;
    }
    else if (input > min + warningTolerance && input < max - warningTolerance ) {
        return true;
    }
    console.log(`Warning: ${criteria} is approaching limit!`);
    return true;
}

module.exports=isValid;