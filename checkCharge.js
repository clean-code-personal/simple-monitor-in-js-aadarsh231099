function checkChargeRate(charge_rate) {
    if (charge_rate > 0.8) {
        console.log('Charge rate is out of range!');
        return false;
    }
    return true;
}

module.exports=checkChargeRate;