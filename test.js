const {expect} = require('chai');
const batteryIsOk = require('./inputFun');

expect(batteryIsOk(25, 70, 0.7)).to.be.true;
expect(batteryIsOk(-5, 60, 0.6)).to.be.false;
expect(batteryIsOk(40, 90, 0.7)).to.be.false;
expect(batteryIsOk(30, 75, 0.9)).to.be.false;