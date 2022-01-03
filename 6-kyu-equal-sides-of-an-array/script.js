// Solution:

function findEvenIndex(arr) {
  let resultIndex = -1;

  function sideSum(array) {
    if (array.length === 0) {
      return 0;
    } else {
      return array.reduce(function(sum, item) {
        return sum + item
      });
    }
  }

  arr.forEach(function(item, index, array) {
    const leftSide = array.slice(0, index);
    const rightSide = array.slice(index + 1, array.length);

    if (sideSum(leftSide) === sideSum(rightSide)) {
      return resultIndex = index;
    }

  });

  return resultIndex;
}

// Sample Tests:

findEvenIndex([20,10,-80,10,10,15,35]) // 0
findEvenIndex([1,2,3,4,3,2,1]) // 3
findEvenIndex([1,100,50,-51,1,1]) // 1
findEvenIndex([1,2,3,4,5,6]) // -1
findEvenIndex([20,10,30,10,10,15,35]) // 3
