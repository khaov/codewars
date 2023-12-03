// Solution:

function nthSmallest() {
  let singleArray = [];

  for (let i = 0; i < arguments[0].length; i++) {
    singleArray = singleArray.concat(arguments[0][i]);
  }

  return singleArray.sort((prev, next) => prev - next)[arguments[1] - 1];
}

// Sample Tests:

// should work with one array
// nthSmallest([[2, 4, 6, 8, 10, 12]], 5); // 10

// should work with one array containing repeating numbers
// nthSmallest([[2, 2, 2, 2, 2]], 3); // 2

// should work with two arrays
nthSmallest([[2, 8, 12], [4, 6, 10]], 5); // 10

// should work with three arrays
// nthSmallest([[1, 5], [2], [4, 8, 9]], 4); // 5

// should work with a bunch of arrays
nthSmallest([[1], [2], [3], [4], [5, 6, 7, 8], [9], [10]], 7); // 7

