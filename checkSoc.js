function checkSoc(soc) {
    if (soc < 20 || soc > 80) {
        console.log('State of Charge is out of range!');
        return false;
    }
    return true;
}

module.exports=checkSoc;