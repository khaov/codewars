// Solution:

function solve(arr) {
  return arr.filter((number, index, array) => index === array.lastIndexOf(number));
}

// Sample Tests:

solve([3,4,4,3,6,3])    //  [4,6,3]
solve([1,2,1,2,1,2,3])  //  [1,2,3]
solve([1,2,3,4])        //  [1,2,3,4]
solve([1,1,4,5,1,2,1])  //  [4,5,2,1]
solve([1,2,1,2,1,1,3])  //  [2,1,3]
