// Solution:

function cantor(nestedList) {
  return nestedList.map((item, index) =>
          item[index] === 0 ? 1 : 0
         );
}

// Sample Tests:


cantor([[0, 0], [1, 1]])                  // [1, 0]
cantor([[1, 1], [0, 0]])                  // [0, 1]
cantor([[0, 1], [1, 0]])                  // [1, 1]
cantor([[0, 0, 0], [1, 1, 1], [0, 1, 0]]) // [1, 0, 1]
cantor([[1, 0, 0], [0, 1, 0], [0, 0, 1]]) // [0, 0, 0]
