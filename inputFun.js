const check = require('./check');

function batteryIsOk(temperature, soc, charge_rate) {
    return check(temperature, 0, 45, 'Temperature') &&
           check(soc, 20, 80, 'State of Charge') &&
           check(charge_rate, 0, 0.8, 'Charge rate');
}


module.exports=batteryIsOk;
