// Solution:

function rowSumOddNumbers(n) {
  let rowCounter = 1;
  let startNumber = 1;
  let resultRowSum = 0;

  while (rowCounter <= n) {
    let currentRowSum = 0;

    for (let i = 1; i <= rowCounter; i++) {
      currentRowSum += startNumber;
      startNumber += 2;
    }

    resultRowSum = currentRowSum;
    rowCounter++;
  }

  return resultRowSum;
}

// Sample Tests:

rowSumOddNumbers(1)   //  1
rowSumOddNumbers(2)   //  8
rowSumOddNumbers(42)  //  74088
