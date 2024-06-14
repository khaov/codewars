// Solution:

function alphabet(ns) {
  let sorted = ns.sort((prev, next) => prev - next);
  return sorted[7] / sorted[sorted[0] * sorted[1] === sorted[2] ? 3 : 2];
}

// Sample Tests:

alphabet([2,3,4,1,12,6,2,4])        // 4
alphabet([2,6,7,3,14,35,15,5])      // 7
alphabet([20,10,6,5,4,3,2,12])      // 5
alphabet([2,6,18,3,6,7,42,14])      // 7
alphabet([7,96,8,240,12,140,20,56]) // 20
alphabet([20,30,6,7,4,42,28,5])     // 7
