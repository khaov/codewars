// Solution:

function inAscOrder(arr) {
  return arr.join('') === [...arr].sort((prev, next) => prev - next).join('');
}

// Sample Tests:

inAscOrder([1,2,4,7,19]);         // returns true
inAscOrder([1,2,3,4,5]);          // returns true
inAscOrder([1,6,10,18,2,4,20]);   // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]);  // returns false
