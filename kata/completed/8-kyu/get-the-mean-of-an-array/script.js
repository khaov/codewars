// Solution:

function getAverage(marks){
  return Math.floor(marks.reduce((sum, mark) => sum += mark) / marks.length)
}

// Sample Tests:

getAverage([2,2,2,2])         // 2
getAverage([1,2,3,4,5,])      // 3
getAverage([1,1,1,1,1,1,1,2]) // 1
