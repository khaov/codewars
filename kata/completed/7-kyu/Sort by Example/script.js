// Solution:

function exampleSort(arr,exampleArr) {
  return arr.sort((prev, next) => exampleArr.indexOf(prev) - exampleArr.indexOf(next));
}

// Sample Tests:

exampleSort([1,2,3,4,5],[2,3,4,1,5])                        // [2,3,4,1,5]
exampleSort([1,2,3,3,3,4,5],[2,3,4,1,5])                    // [2,3,3,3,4,1,5]
exampleSort([1,2,3,3,3,5],[2,3,4,1,5])                      // [2,3,3,3,1,5]
exampleSort([1,2,3,3,3,5],[3,4,5,6,9,11,12,13,1,7,8,2,10])  // [3,3,3,5,1,2]