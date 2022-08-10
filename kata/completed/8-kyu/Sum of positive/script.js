// Solution:

function positiveSum(arr) {
  return arr.filter(num => num > 0).reduce((num, sum) => sum += num, 0);
}

// Sample Tests:

positiveSum([1,2,3,4,5])      // 15
positiveSum([1,-2,3,4,5])     // 13
positiveSum([])               // 0
positiveSum([-1,-2,-3,-4,-5]) // 0
positiveSum([-1,2,3,4,-5])    // 9
