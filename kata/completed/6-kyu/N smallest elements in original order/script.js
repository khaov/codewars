// Solution:

function firstNSmallest(array, n) {
  let smallestArray = [];
  let sortedArray = [...array].sort((prev, next) => prev - next).slice(0, n);

  for (let i = 0; i < array.length; i++) {
    if (sortedArray.includes(array[i])) {
      smallestArray.push(...sortedArray.splice(sortedArray.indexOf(array[i]), 1));
    }
  }

  return smallestArray
}

// Sample Tests:

firstNSmallest([1,2,3,4,5],3)     // [1,2,3]
firstNSmallest([5,4,3,2,1],3)     // [3,2,1]
firstNSmallest([1,2,3,1,2],3)     // [1,2,1]
firstNSmallest([1,2,3,-4,0],3)    // [1,-4,0]
firstNSmallest([1,2,3,4,5],0)     // []
firstNSmallest([1,2,3,4,5],5)     // [1,2,3,4,5]
firstNSmallest([1,2,3,4,2],4)     // [1,2,3,2]
firstNSmallest([2,1,2,3,4,2],2)   // [2,1]
firstNSmallest([2,1,2,3,4,2],3)   // [2,1,2]
firstNSmallest([2,1,2,3,4,2],4)   // [2,1,2,2]
