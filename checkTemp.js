function checkTemperature(temperature) {
    if (temperature < 0 || temperature > 45) {
        console.log('Temperature is out of range!');
        return false;
    }
    return true;
}

module.exports=checkTemperature;