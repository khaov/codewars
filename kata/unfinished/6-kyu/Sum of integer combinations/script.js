// Solution:

function find(arr, n) {

  function combinationSum(combination) {
    return combination.reduce((sum, number) => sum += number, 0);
  }

  const combinationLength = arr.length;

  let validCombinations = 0;
  let expandedArray = [];

  arr.forEach(function(number) {
    for (let i = 0; i < combinationLength; i++) {
      expandedArray.push(number);
    }
  });

  expandedArray.forEach(function(number, index) {
    for (let i = 1; i <= combinationLength; i++) {
      if(combinationSum(expandedArray.slice(index, index + i)) === n){
        validCombinations++
      }
    }
  });

  return validCombinations;
};

// Sample Tests:

//find([1,2,3],10)          // 0
// find([1,2,3],7)           // 2
// find([1,2,3],5)           // 3
find([3,6,9,12],12)       // 5
// find([1,4,5,8],8)         // 3
// find([3,6,9,12],15)       // 5
// find([3,6,9,12,14,18],30) // 21
