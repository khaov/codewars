// Solution:

function sumOfMinimums(arr) {
  return arr.map(array => array.sort((a, b) => a -b)[0]).reduce((sum, num) => sum + num);
}

// Sample Tests:

sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])              // 9
sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]) // 76
