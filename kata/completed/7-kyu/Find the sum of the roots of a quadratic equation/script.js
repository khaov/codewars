// Solution:

function roots(a,b,c){
  const d = Math.pow(b, 2) - 4 * a * c;

  if (d > 0) {
    const sum = ((-1 * b + Math.sqrt(d)) / (2 * a) +
                 (-1 * b - Math.sqrt(d)) / (2 * a));

    return Number.isInteger(sum) ?
           sum :
           Number(sum.toFixed(2));
  } else if (d == 0) {
    return -1 * (b / (2 * a)) * 2;
  } else {
    return null;
  }
}

// Basic Tests:

roots(1,-35,-23)    // 35
roots(6,0,-24)      // 0
roots(-5,21,0)      // 4.2
roots(6,4,8)        // null
roots(1,5,-24)      // -5
roots(3,11,6)       // -3.67
roots(2,2,9)        // null
roots(1,-5/3.0,-26) // 1.67
roots(1,6,10)       // null
roots(7,-2,-5)      // 0.29
roots(1,8,20)       // null
roots(2,3,-2)       // -1.5
roots(1,4,12)       // null
roots(3,-2,-5)      // 0.67
roots(3,4,9)        // null
roots(5,4,0)        // -0.8
roots(4,-5,0)       // 1.25
roots(1,4,9)        // null
roots(1,0,-49)      // 0
roots(2,8,8)        // -4
roots(1,0,-0.16)    // 0
roots(1,6,12)       // null
roots(1,0,-9)       // 0
roots(-3,0,12)      // 0
roots(1,3,9)        // null
roots(3,7,0)        // -2.33
roots(5,3,6)        // null
roots(1,4,4)        // -4
roots(-1,0,5.29)    // 0
roots(1,12,36)      // -12
roots(1,0,-0.09)    // 0
roots(2,5,11)       // null
roots(3,0,-15)      // 0
roots(1,-3,0)       // 3
roots(1,8,16)       // -8
roots(2,6,9)        // null
roots(-1,36,0)      // 36
roots(5,-8,0)       // 1.6
roots(1,5,12)       // null
roots(-14,0,0)      // 0
roots(1,7,20)       // null
roots(1,-6,0)       // 6
roots(1,-11,30)     // 11
roots(1,3,12)       // null
roots(1,6,9)        // -6
