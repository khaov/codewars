// Solution:

function completeSeries(arr) {
  if (arr.every(num => arr.indexOf(num) === arr.lastIndexOf(num))) {
    return Array.from(Array(Math.max.apply(null, arr) + 1).keys());
  } else {
    return [0];
  }
}

// Sample Tests:


completeSeries([0,1])     // [0,1]
completeSeries([1,4,6])   // [0,1,2,3,4,5,6]
completeSeries([3,4,5])   // [0,1,2,3,4,5]
completeSeries([2,1])     // [0,1,2]
completeSeries([1,4,4,6]) // [0]






