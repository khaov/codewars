// Solution:

function squareOrSquareRoot(array) {
  return array.map(number => 
                   number === Math.pow(Math.round(Math.sqrt(number)), 2) ?
                              Math.sqrt(number):
                              Math.pow(number, 2)
                  );
}

// Sample Tests:

squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ])      // [ 2, 9, 3, 49, 4, 1 ]
squareOrSquareRoot([ 100, 101, 5, 5, 1, 1 ])  // [ 10, 10201, 25, 25, 1, 1 ]
squareOrSquareRoot([ 1, 2, 3, 4, 5, 6 ])      // [ 1, 4, 9, 2, 25, 36 ]
