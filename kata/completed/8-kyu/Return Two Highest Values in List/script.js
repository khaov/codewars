// Solution:

function twoHighest(arr) {
  return arr.filter((number, index, array) => index === array.lastIndexOf(number))
            .sort((prev, next) => next - prev)
            .slice(0, 2);
}

// Sample Tests:

twoHighest([])                // []
twoHighest([15])              // [15]
twoHighest([1, 1, 1])         // [1]
twoHighest([4, 10, 10, 9])    // [10, 9]
twoHighest([15, 20, 20, 17])  // [20, 17]
