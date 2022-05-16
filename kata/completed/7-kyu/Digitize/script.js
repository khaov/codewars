// Solution:

function digitize(n) {
  return n.toString().split('').map(item => Number(item));
}

// Sample Tests:

digitize(123)     // [1,2,3]
digitize(1)       // [1]
digitize(0)       // [0]
digitize(1230)    // [1,2,3,0]
digitize(8675309) // [8,6,7,5,3,0,9]
