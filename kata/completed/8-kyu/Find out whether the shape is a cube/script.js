// Solution:

var cubeChecker = function(volume, side){
  return volume > 0 && side > 0 ? Math.pow(side, 3) === volume : false;
};

// Sample Tests:

cubeChecker(56.3, 1)  // false
cubeChecker(-1, 2)    // false
cubeChecker(8, 3)     // false
cubeChecker(8, 2)     // true
cubeChecker(-8,-2)    // false
cubeChecker(0, 0)     // false
cubeChecker(1, 5)     // false
cubeChecker(125, 5)   // true
cubeChecker(125,-5)   // false
