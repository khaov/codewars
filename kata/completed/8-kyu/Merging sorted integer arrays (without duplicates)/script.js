// Solution:

function mergeArrays(a, b) {
  return a.concat(b)
          .filter((number, index, array) => index === array.lastIndexOf(number))
          .sort((prev, next) => prev - next);
}

// Sample Tests:

mergeArrays([1, 3, 5], [2, 4, 6]) // [1, 2, 3, 4, 5, 6]
mergeArrays([2, 4, 8], [2, 4, 6]) // [2, 4, 6, 8]
