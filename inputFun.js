const isValid = require('./check');
const lang = require('./language');
const convertToCelsius = require('./unitConversion');


function batteryIsOk(temperature,tempUnit, soc, charge_rate) {
    temperature = convertToCelsius(temperature, tempUnit);
    return isValid(temperature, 0, 45, lang.temperature,tempUnit) &&
           isValid(soc, 20, 80, lang.soc) &&
           isValid(charge_rate, 0, 0.8, lang.chargeRate);
}


module.exports=batteryIsOk;