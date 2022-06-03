// Solution:

function head(array) {
  return array[0];
}

function tail(array) {
  return array.slice(1);
}

function init(array) {
  return array.slice(0, array.length - 1);
}

function last(array) {
  return array[array.length - 1];
}

// Sample Tests:

head([1,2,3,4,5,6,7,8,9,10])  // 1
tail([1,2,3,4,5,6,7,8,9,10])  // [2,3,4,5,6,7,8,9,10]
init([1,2,3,4,5,6,7,8,9,10])  // [1,2,3,4,5,6,7,8,9]
last([1,2,3,4,5,6,7,8,9,10])  // 10

head([5,1])     // 5
tail([1])       // []
init([1,5,7,9]) // [1,5,7]
last([7,2])     // 2
