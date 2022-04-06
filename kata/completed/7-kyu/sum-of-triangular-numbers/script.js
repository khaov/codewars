// Solution:

function sumTriangularNumbers(n) {
  if (n > 0) {
    let triangularSum = 0;
    let triangularNumber = 0;

    for (let i = 1; i <= n; i++ ) {
      triangularNumber = triangularNumber + i;
      triangularSum = triangularSum + triangularNumber;
    }

    return triangularSum;
  } else {
    return 0;
  }
}

// Sample Tests:

sumTriangularNumbers(6)     // 56
sumTriangularNumbers(34)    // 7140
sumTriangularNumbers(-291)  // 0
sumTriangularNumbers(943)   // 140205240
sumTriangularNumbers(-971)  // 0
