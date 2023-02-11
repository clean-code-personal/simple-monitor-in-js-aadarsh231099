const isValid = require('./check');
const lang = require('./language');


function batteryIsOk(temperature, soc, charge_rate) {
    return isValid(temperature, 0, 45, lang.temperature) &&
           isValid(soc, 20, 80, lang.soc) &&
           isValid(charge_rate, 0, 0.8, lang.chargeRate);
}


module.exports=batteryIsOk;