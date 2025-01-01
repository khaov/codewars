// Solution:

function xMarksTheSpot(matrix) {
  let coordinates = [];

  matrix.forEach((row, rowIndex) =>
    row.forEach((col, colIndex) =>
      col === 'x' ? coordinates.push(rowIndex, colIndex) : ''
    )
  )

  return coordinates.length <= 2 ? coordinates : [];
}

// Sample Tests:

// 'Return an empty array if x is an empty array'

xMarksTheSpot([]); // []

// 'Return an empty array if no x found'

xMarksTheSpot([['o', 'o'], ['o', 'o']]) // []

// 'Return an empty array if more than one x found'

xMarksTheSpot([['x', 'o'], ['o', 'x']]) // []

// 'Return [0,0] when x at top left'

xMarksTheSpot([['x', 'o'], ['o', 'o']]) // [0, 0]

// 'Return [4,6] when x at position [4,6]'

xMarksTheSpot([
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
]) // [4, 6]
