// Solution:

function circleArea(radius) {
  if (radius <= 0 || typeof radius !== 'number') {
    return Error;
  } else {
    return Number((Math.PI * Math.pow(radius, 2)).toFixed(2));
  }
}

// Sample Tests:

circleArea(1)       // 3.141
circleArea(43.2673) // 5881.248
circleArea(68)      // 14526.724
circleArea(0)       // Error
circleArea(-1)      // Error
