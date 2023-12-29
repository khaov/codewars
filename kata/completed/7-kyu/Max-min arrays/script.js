// Solution:

function solve(arr){
  const sorting = arr.sort((prev, next) => next - prev);
  const length = sorting.length;

  let alternation = [];

  for (let i = 0; i < length; i++) {
    alternation.push(sorting.shift(), sorting.pop());
  }

  return alternation.filter(number => number != undefined);
};

// Sample Tests:

solve([15,11,10,7,12])              // [15,7,12,10,11]
solve([91,75,86,14,82])             // [91,14,86,75,82]
solve([84,79,76,61,78])             // [84,61,79,76,78]
solve([52,77,72,44,74,76,40])       // [77,40,76,44,74,52,72]
solve([1,6,9,4,3,7,8,2])            // [9,1,8,2,7,3,6,4]
solve([78,79,52,87,16,74,31,63,80]) // [87,16,80,31,79,52,78,63,74]
