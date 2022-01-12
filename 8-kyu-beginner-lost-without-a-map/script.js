// Solution:

function maps(x){
  return x.map(item => item * 2);
}

// Sample Tests:

maps([1, 2, 3])           // [2, 4, 6]
maps([4, 1, 1, 1, 4])     // [8, 2, 2, 2, 8]
maps([2, 2, 2, 2, 2, 2])  // [4, 4, 4, 4, 4, 4]
