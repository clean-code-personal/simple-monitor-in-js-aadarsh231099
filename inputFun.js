const isValid = require('./check');


function batteryIsOk(temperature, soc, charge_rate) {

    const ToleranceSoc = 0.05 * 80;
    const ToleranceTemperature = 0.05 * 45;
    const ToleranceChargeRate = 0.05 * 0.8;

    return isValid(temperature, 0, 45, 'Temperature',ToleranceTemperature) &&
           isValid(soc, 20, 80, 'State of Charge',ToleranceSoc) &&
           isValid(charge_rate, 0, 0.8, 'Charge rate',ToleranceChargeRate);
}


module.exports=batteryIsOk;
