// Solution:

function getMatrix(number) {
  return Array(number).fill(Array(number).fill(0))
    .map((arrayItem, arrayIndex) =>
      arrayItem.map((_, index) =>
        index === arrayIndex ? 1 : 0
      )
    );
}

// Sample Tests:

getMatrix(0) // []
getMatrix(1) // [[1]]
getMatrix(2) // [[1, 0], [0, 1]]
getMatrix(5) // [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]
