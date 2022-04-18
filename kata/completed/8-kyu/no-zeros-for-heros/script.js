// Solution:

function noBoringZeros(n) {
  if (n === 0) {
    return 0;
  } else {
    const sourceNumber = n.toString();
    let resultNumber = sourceNumber;

    for (let i = 0; i < sourceNumber.length; i++) {
      if (resultNumber.endsWith('0')){
        resultNumber = resultNumber.substring(0, resultNumber.length - 1);
      }
    }

    return Number(resultNumber);
  }
}

// Sample Tests:

noBoringZeros(1450)       // 145
noBoringZeros(960000)     // 96
noBoringZeros(1050)       // 105
noBoringZeros(-1050)      // -105
noBoringZeros(-105)       // -105
noBoringZeros(0)          // 0
noBoringZeros(110040000)  // 11004
