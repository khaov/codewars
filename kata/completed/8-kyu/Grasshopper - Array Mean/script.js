// Solution:

var findAverage = function (nums) {
  return nums.reduce((sum, num) => sum += num, 0) / nums.length;
}

// Sample Tests:

findAverage([1]) // 1
findAverage([1, 3, 5, 7]) // 4
