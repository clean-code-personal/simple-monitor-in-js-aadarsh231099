expect(batteryIsOk(42.76, 70 , 0.7)).to.be.true; //test for tempertaure approaching upper limit
// expect(batteryIsOk(2.24, 70 , 0.7)).to.be.true;  //test for tempertaure approaching lower limit
// expect(batteryIsOk(25, 76.1, 0.7)).to.be.true;   //test for soc approaching upper limit
// expect(batteryIsOk(25, 23, 0.7)).to.be.true;     //test for soc approaching lower limit
// expect(batteryIsOk(30, 74 , 0.761)).to.be.true;  //test for charge rate approaching upper limit
// expect(batteryIsOk(35, 65 , 0.04)).to.be.true;   //test for charge rate approaching lower limit
// expect(batteryIsOk(-5, 60, 0.6)).to.be.false;    //test for temperature out of range
// expect(batteryIsOk(40, 90, 0.7)).to.be.false;    //test for soc out of range
// expect(batteryIsOk(30, 75, 0.9)).to.be.false;    //test for charge rate out of range