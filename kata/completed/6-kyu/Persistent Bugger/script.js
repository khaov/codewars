// Solution:

function persistence(num) {
  let multiplyResult = num;
  let multiplyCounter = 0;

  while (multiplyResult >= 10) {
    multiplyResult = multiplyResult.toString().split('').reduce((result, digit) => result = result * Number(digit), 1);
    multiplyCounter++;
  }

  return multiplyCounter;
}

// Sample Tests:

persistence(39)   // 3
persistence(4)    // 0
persistence(25)   // 2
persistence(999)  // 4
