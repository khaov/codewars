// Solution:

function curry(f) {
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

function multiply(array, integer) {
  return array.map(number => number * integer)
}

const multiplyAll = curry(multiply);

// Sample Tests:

multiplyAll([1, 2, 3])(1) // [1, 2, 3]
multiplyAll([1, 2, 3])(2) // [2, 4, 6]
multiplyAll([1, 2, 3])(0) // [0, 0, 0]
multiplyAll([])(10)       // [], "should return an empty array"
