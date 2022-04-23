// Solution:

function arrayDiff(a, b) {
  return a.filter(number => !b.includes(number));
}

// Sample Tests:

arrayDiff([], [4,5])      // []
arrayDiff([3,4], [3])     // [4]
arrayDiff([1,8,2], [])    // [1,8,2]
arrayDiff([1,2,3], [1,2]) // [3]
