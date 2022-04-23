// Solution:

function isPowerOfTwo(n){
  let number = 1;
  while (number < n) {
    number += number
  }

  return number === n
}

// Sample Tests:

isPowerOfTwo(0)     // false
isPowerOfTwo(1)     // false
isPowerOfTwo(2)     // true
isPowerOfTwo(5)     // false
isPowerOfTwo(333)   // false
isPowerOfTwo(1024)  // true
isPowerOfTwo(4096)  // true
