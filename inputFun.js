const isValid = require('./check');
const lang = require('./language');
const convertToCelsius = require('./unitConversion');


function batteryIsOk(temperature,tempUnit, soc, charge_rate) {
    temperature = convertToCelsius(temperature, tempUnit);
    const tempValidation = isValid(temperature, 0, 45, lang.temperature);
    const socValidation = isValid(soc, 20, 80, lang.soc);
    const chargeRateValidation = isValid(charge_rate, 0, 0.8, lang.chargeRate);
    if (!tempValidation.status || !socValidation.status || !chargeRateValidation.status) {
        console.log(`Error: ${tempValidation.message}, ${socValidation.message}, ${chargeRateValidation.message}`);
        return false;
    } else if (tempValidation.level === 'warning' || socValidation.level === 'warning' || chargeRateValidation.level === 'warning') {
        console.log(`Warning: ${tempValidation.message}, ${socValidation.message}, ${chargeRateValidation.message}`);
        return true;
    }
    console.log(`Info: ${tempValidation.message}, ${socValidation.message}, ${chargeRateValidation.message}`);
    return true;
}


module.exports=batteryIsOk;