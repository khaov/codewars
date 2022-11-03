// Solution:

function getSum(n) {
  let triangle = [];

  for (let j = 0; j <= n; j++) {
    for (let i = 0; i <= n; i++) {
      if (j <= i) {
        triangle.push(2*j + i + 1)
      }
    }
  }

  return triangle.reduce((sum, num) => sum += num, 0);
}

// Sample Tests:

// Small tests:

getSum(0n); // 1n
getSum(1n); // 7n
getSum(2n); // 22n
getSum(3n); // 50n

// Medium tests:

getSum(100n);  // 691951n
getSum(500n);  // 83959751n
getSum(1000n); // 669169501n

// Large tests:

getSum(10000n);   // 666916695001n
getSum(100000n);  // 666691666950001n
getSum(1000000n); // 666669166669500001n
