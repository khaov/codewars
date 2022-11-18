// Solution:

function squares(x, n) {
  return Array.from({length: n}, (_, index) => index === 0 ? x : x *= x);
}

// Sample Tests:

squares(2,5)  // [2,4,16,256,65536]
squares(3,3)  // [3,9,81]
squares(5,3)  // [5,25,625]
squares(10,4) // [10,100,10000,100000000]
