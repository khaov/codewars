// Solution:

function consecutive(arr, a, b) {
  return Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1;
}

// Sample Tests:

consecutive([1, 3, 5, 7], 3, 7)               // false
consecutive([1, 3, 5, 7], 3, 1)               // true
consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4)  // true
