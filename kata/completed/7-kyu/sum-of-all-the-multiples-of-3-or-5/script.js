// Solution:

function findSum(n) {
  sum = 0;
  if (n >= 3){
    for (let i = 3; i <= n; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum = sum + i
      }
    }
  }
  return sum
}

// Sample Tests:

findSum(5)  // 8
findSum(10) // 33
