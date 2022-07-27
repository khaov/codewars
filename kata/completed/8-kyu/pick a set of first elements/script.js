// Solution:

function first(arr, n) {
  return n >= 0 ? arr.slice(0, n) : arr.slice(0, 1);
}

// Sample Tests:

const arr = ['a', 'b', 'c', 'd', 'e'];

first(arr)    // ['a'];
first(arr, 2) // ['a', 'b']
first(arr, 3) // ['a', 'b', 'c'];
first(arr, 0) // [];
