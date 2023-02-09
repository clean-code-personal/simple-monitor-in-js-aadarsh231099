const {expect} = require('chai');
const batteryIsOk=require('./batteryCheck');

const testCases = [
    { temperature: 25, soc: 70, charge_rate: 0.7, expectedResult: true },
    { temperature: -5, soc: 60, charge_rate: 0.6, expectedResult: false },
    { temperature: 40, soc: 90, charge_rate: 0.7, expectedResult: false },
    { temperature: 30, soc: 75, charge_rate: 0.9, expectedResult: false },
];

testCases.forEach((testCase) => {
    const result = batteryIsOk(testCase.temperature, testCase.soc, testCase.charge_rate);
    expect(result).to.equal(testCase.expectedResult);
});