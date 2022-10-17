// Solution:

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft;
};

// Sample Tests:

zeroFuel(50, 25, 2)   // true
zeroFuel(100, 50, 1)  // false
