const checkTemperature=require('./checkTemp');
const checkSoc=require('./checkSoc');
const checkChargeRate=require('./checkCharge');

function batteryIsOk(temperature, soc, charge_rate) {
     if(checkTemperature(temperature) &&
           checkSoc(soc) &&
           checkChargeRate(charge_rate))
           {
            console.log('Everything is Fine!');
            return true; 
           }
     else
     return false;

}

module.exports=batteryIsOk;