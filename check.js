function check(input, min, max, criteria) {
    if (input < min || input > max) {
        console.log(`${criteria} is out of range!`);
        return false;
    }
    return true;
}

module.exports=check;