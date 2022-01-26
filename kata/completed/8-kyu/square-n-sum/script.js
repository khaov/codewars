// Solution:

function squareSum(numbers){
  return numbers.length ? numbers.reduce((sum, num) => sum += Math.pow(num, 2), 0) : 0
}

// Sample Tests:

squareSum([1,2])        // 5
squareSum([0, 3, 4, 5]) // 50
squareSum([])           // 0
