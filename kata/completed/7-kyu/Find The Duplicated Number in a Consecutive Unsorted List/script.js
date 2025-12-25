// Solution:

function findDup(arr){
  return arr.sort((prev, next) => prev - next).filter((value, index, array) => value === array[index + 1])[0];
}

// Sample Tests:

findDup([1,2,2,3])          // 2
findDup([1,3,2,5,4,5,7,6])  // 5
findDup([3,2,5,1,3,4])      // 3
findDup([1,2,4,5,5])        // 5
