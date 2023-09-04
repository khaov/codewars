// Solution:

function getMean(arr, x, y) {
  return (arr.length > x && arr.length > y) && (x > 1 && y > 1) ?
          (arr.slice(0, x).reduce((sum, num) => sum += num, 0) / x + arr.slice(-y).reduce((sum, num) => sum += num, 0) / y) / 2 : -1
}

// Sample Tests:

getMean([1,3,2,4],2,3)  // 2.5
getMean([1,3,2],2,2)    // 2.25
getMean([1,3,2,4],1,2)  // -1
getMean([1,3,2,4],2,8)  // -1
