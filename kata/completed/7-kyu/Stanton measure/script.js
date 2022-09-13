// Solution:

function stantonMeasure(array) {
  return array.filter(number => number === array.filter(value => value === 1).length).length;
}

// Sample Tests:

stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]) // 3
