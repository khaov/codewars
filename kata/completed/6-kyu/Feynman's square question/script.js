// Solution:

// function countSquares(n) {
//   let squares = 0;

//   for (let i = 0; i <=n; i++) {
//     squares += Math.pow(n-i, 2);
//   }

//   return squares;
// }

function countSquares(n) {
  let squares = 0;

  for (let i = n; i !== 0; i--) {
    squares += Math.pow(i, 2);
  }

  return squares;
}

// Sample Tests:

countSquares(1)   // 1
countSquares(2)   // 5
countSquares(5)   // 55
countSquares(15)  // 1240
