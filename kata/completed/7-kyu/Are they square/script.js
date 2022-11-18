// Solution:

var isSquare = function(arr){
  return arr.length > 0 ? arr.every(number => number === Math.pow(Math.ceil(Math.sqrt(number)), 2)) :  undefined;
}

// Sample Tests:

isSquare([1, 4, 9, 16, 25, 36]) // true
isSquare([1, 2, 3, 4, 5, 6])    // false
isSquare([])                    // undefined
isSquare([1, 2, 4, 15])         // false
