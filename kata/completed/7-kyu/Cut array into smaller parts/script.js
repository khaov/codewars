// Solution:

function makeParts(arr, chunkSize) {
  let chunkArr = [];

  while (arr.length > 0) {
    chunkArr.push(arr.splice(0, chunkSize));
  }

  return chunkArr;
}

// Sample Tests:

makeParts([1,2,3,4,5], 2)   // [[1,2],[3,4],[5]]
makeParts([1,2,3], 1)       // [[1],[2],[3]]
makeParts([1,2,3,4,5], 10)  // [[1,2,3,4,5]]
