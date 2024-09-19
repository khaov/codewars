// Solution:

function every(arr, interval, start){
  const array = start ? arr.slice(start) : arr;
  return interval ? array.filter((_, index) => index % interval === 0) : array;
}

// Sample Tests:

every([0,1,2,3,4])      // [0,1,2,3,4]
every([0,1,2,3,4],1)    // [0,1,2,3,4]
every([0,1,2,3,4],2)    // [0,2,4]
every([0,1,2,3,4],3)    // [0,3]
every([0,1,2,3,4],3,1)  // [1,4]
