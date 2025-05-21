// Solution:

function arrayMadness(a, b) {
  const sumA = a.reduce((sum, num) => sum += Math.pow(num, 2), 0)
  const sumB = b.reduce((sum, num) => sum += Math.pow(num, 3), 0)

  return sumA > sumB;
}

// Sample Tests:

arrayMadness([4,5,6],[1,2,3])                       // true
arrayMadness([5,6,7],[4,5,6])                       // false
arrayMadness([4,5,6],[3,4,5])                       // false
arrayMadness([3,4,5],[2,3,4])                       // false
arrayMadness([2,3,4],[1,2,3])                       // false
arrayMadness([1,2,3],[0,1,2])                       // true
arrayMadness([5,3,2,4,1],[15])                      // false
arrayMadness([2,5,3,4,1],[3,3,3,3,3])               // false
arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1])         // false
arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1])       // true
arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13])  // false