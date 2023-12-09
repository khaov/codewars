// Solution:

var isEven = function (n) {
  return (n / 2).toString().split('.')[1] === undefined;
}

// Sample Tests:

isEven(2)   // true
isEven(3)   // false
isEven(14)  // true
isEven(15)  // false
isEven(26)  // true
isEven(27)  // false