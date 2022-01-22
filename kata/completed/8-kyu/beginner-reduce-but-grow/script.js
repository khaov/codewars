// Solution:

function grow(x){
  return x.reduce(function(prev, item) {
    return prev * item;
  });
}

// Sample Tests:

grow([1, 2, 3]) // 6
grow([4, 1, 1, 1, 4]) // 16
grow([2, 2, 2, 2, 2, 2]) // 64
