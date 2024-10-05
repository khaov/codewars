// Solution:

function makeLatinSquare(n) {
  let latinSquare = [];
  let baseArray = [];

  for (let i = 1; i <= n; i++) {
    baseArray.push(i);
  }

  for (let i = 0; i < n; i++) {
    latinSquare.push(baseArray.slice(i).concat(baseArray.slice(0, i)));
  }

  return latinSquare;
}

// Sample Tests:

makeLatinSquare(4)
