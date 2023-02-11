const {expect} = require('chai');
const batteryIsOk = require('./inputFun');

expect(batteryIsOk(25,"Celcius", 70, 0.7)).to.be.true;
expect(batteryIsOk(-5,"Celcius", 60, 0.6)).to.be.false;
expect(batteryIsOk(104,"Fahrenheit", 90, 0.7)).to.be.false;
expect(batteryIsOk(86,"Fahrenehit", 75, 0.9)).to.be.false;