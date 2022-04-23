// Solution:

function minMax(arr){
  let profit = [];

  const increaseArray = arr.sort(function(a, b) {
    return a - b;
  });

  profit.push(increaseArray[0]);

  const decreaseArray = arr.sort(function(a, b) {
    return b - a;
  });

  profit.push(decreaseArray[0]);

  return profit;
}

// Sample Tests:

minMax([1,2,3,4,5])   // [1,5]
minMax([2334454,5])   // [5, 2334454]
minMax([1])           // [1, 1]