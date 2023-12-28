// Solution:

function equableTriangle(a,b,c) {
  const perimeter = a + b + c;
  const semiperimeter = (a + b + c) / 2;

  const area = Math.sqrt(semiperimeter * (semiperimeter - a)*(semiperimeter - b)*(semiperimeter - c));

  return area === perimeter;
}

// Sample Tests:

equableTriangle(5,12,13)    // true
equableTriangle(2,3,4)      // false
equableTriangle(6,8,10)     // true
equableTriangle(7,15,20)    // true
equableTriangle(17,17,30)   // false
equableTriangle(7,10,12)    // false
equableTriangle(6,11,12)    // false
equableTriangle(25,25,45)   // false
equableTriangle(13,37,30)   // false
equableTriangle(6,25,29)    // true
equableTriangle(10,11,18)   // false
equableTriangle(73,9,80)    // false
equableTriangle(12,35,37)   // false
equableTriangle(120,109,13) // false
equableTriangle(9,10,17)    // true
