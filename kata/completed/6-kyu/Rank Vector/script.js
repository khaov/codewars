// Solution:

function ranks(a) {
  return a.map(function(item){
    return [...a].sort((prev, next) => next - prev).indexOf(item) + 1;
  });
}

// Sample Tests:

ranks([])                           // []
ranks([2])                          // [1]
ranks([2, 2])                       // [1, 1]
ranks([1, 2, 3])                    // [3, 2, 1]
ranks([5, 2, 3, 5, 5, 4, 9, 8, 0])  // [3, 8, 7, 3, 3, 6, 1, 2, 9]
