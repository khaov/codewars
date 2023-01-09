// Solution:

function slope(points) {
  y = points[3] - points[1];
  x = points[2] - points[0];

  return x !== 0 ?  (y / x).toString() : "undefined";
}

// Sample Tests:

slope([19,3,20,3])    // "0"
slope([2,7,4,-7])     // "-7"
slope([10,50,30,150]) // "5"
slope([15,45,12,60])  // "-5"
slope([10,20,20,80])  // "6"
slope([-10,6,-10,3])  // "undefined"
