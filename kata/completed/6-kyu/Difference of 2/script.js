// Solution:

function twosDifference(input) {
  difference = [];

  input.forEach(function(number, index) {
    input.slice(index, input.length).forEach(function(pair) {
      if (Math.abs(number - pair) === 2) {
        difference.push([number, pair].sort((prev, next) => prev - next));
      }
    });
  });

  return difference.sort((prev, next) => prev[0] - next[0]);
}

// Sample Tests:

twosDifference([1,2,3,4])     // [[1,3],[2,4]]
twosDifference([4,1,2,3])     // [[1,3],[2,4]]
twosDifference([1,3,4,6])     // [[1,3],[4,6]]
twosDifference([1,23,3,4,7])  // [[1,3]]
twosDifference([4,3,1,5,6])   // [[1, 3], [3, 5], [4, 6]]
