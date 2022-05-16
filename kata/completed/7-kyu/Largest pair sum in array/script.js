// Solution:

function largestPairSum (numbers) {
  let sortedNumbers = numbers.sort((prev, next) => next - prev);
  return sortedNumbers[0] + sortedNumbers[1];
}

// Sample Tests:

largestPairSum([10,14,2,23,19])           //  42
largestPairSum([-100,-29,-24,-19,19])     //  0
largestPairSum([1,2,3,4,6,-1,2])          //  10
largestPairSum([-10, -8, -16, -18, -19])  //  -18
