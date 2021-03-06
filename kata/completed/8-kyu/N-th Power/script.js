// Solution:

function index(array, n){
  if (array[n] !== undefined) {
    return Math.pow(array[n], n)
  } else {
    return -1;
  }
}

// Sample Tests:

index([1, 2, 3, 4],2)                 // 9
index([1, 3, 10, 100],3)              // 1000000
index([1, 2],3)                       // -1
index([1,1,1,1,1,1,1,1,1,1], 9)       // 1
index([1,1,1,1,1,1,1,1,1,2], 9)       // 512
index([29,82,45,10], 3)               // 1000
index([6,31], 3)                      // -1
index([75,68,35,61,9,36,89,0,30], 10) // -1
