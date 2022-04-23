// Solution:

function findNextSquare(sq) {
  let square = Math.sqrt(sq);
  if (Number.isInteger(square)) {
    return Math.pow(square + 1, 2);
  } else {
    return -1;
  }
}

// Sample Tests:

findNextSquare(114)         // -1
findNextSquare(121)         // 144
findNextSquare(625)         // 676
findNextSquare(319225)      // 320356
findNextSquare(15241383936) // 15241630849
