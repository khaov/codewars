// Solution:

function adjacentElementsProduct(array) {
  return Math.max.apply(
    null,
    array.map((number, index, array) => number * array[index + 1]).slice(0, array.length - 1)
  );
}

// Sample Tests:

adjacentElementsProduct([5, 8])             // 40
adjacentElementsProduct([1, 2, 3])          // 6
adjacentElementsProduct([1, 5, 10, 9])      // 90
adjacentElementsProduct([4, 12, 3, 1, 5])   // 48
adjacentElementsProduct([5, 1, 2, 3, 1, 4]) // 6
