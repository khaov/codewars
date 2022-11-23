// Solution:

function sumOfDifferences(arr) {
  return arr.sort((prev, next) => next - prev)
            .reduce((sum, number, index, array) => index !== array.length - 1 ? sum += number - array[index + 1] : sum, 0);
}

// Sample Tests:

sumOfDifferences([1, 2, 10])    // 9
sumOfDifferences([-3, -2, -1])  // 2
