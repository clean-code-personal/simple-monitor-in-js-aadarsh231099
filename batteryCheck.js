const checkTemperature=require('./checkTemp');
const checkSoc=require('./checkSoc');
const checkChargeRate=require('./checkCharge');

function batteryIsOk(temperature, soc, charge_rate) {
     return (checkTemperature(temperature) &&
           checkSoc(soc) &&
           checkChargeRate(charge_rate));

}

module.exports=batteryIsOk;