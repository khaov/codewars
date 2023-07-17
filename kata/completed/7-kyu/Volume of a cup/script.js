// Solution:

function cupVolume(d1, d2, height) {
  const coneVolume = Math.PI / 3 * height * (Math.pow(d1 / 2, 2) + d1 / 2 * d2 / 2  + Math.pow(d2 / 2, 2));
  return Number((coneVolume).toFixed(2));
}

// Sample Tests:

cupVolume(1, 1, 1)            // 0.79
cupVolume(10, 8, 10)          // 638.79
cupVolume(1000, 1000, 1000)   // 785398163.4
cupVolume(13.123, 123.12, 1)  // 4436.57
cupVolume(5, 12, 31)          // 1858.51
