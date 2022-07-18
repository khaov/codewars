// Solution:

function matrixAddition(a, b){
  return a.map((item, itemIndex) =>
                item.map((element, elementIndex) =>
                          element + b[itemIndex][elementIndex]
                        )
              );
}

// Sample Tests:

matrixAddition(
  [ [1, 2],
    [1, 2] ],
  [ [2, 3],
    [2, 3] ] )    // [ [3, 5], [3, 5] ]

matrixAddition(
  [ [1] ],
  [ [2] ] )       // [ [3] ]

matrixAddition(
  [ [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1] ],

  [ [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3] ] ) // [ [3, 4, 4], [6, 4, 4], [2, 2, 4] ]
