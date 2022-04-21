// Solution:

function thirt(n) {
  let sequence = [1, 10, 9, 12, 3, 4];
  let sequenceIndex = 0;

  let prevNumbersSum = n;
  let currNumbersSum = 0;

  let numbers = n.toString().split('').reverse();

  for (let numbersIndex = 0; numbersIndex < numbers.length; numbersIndex++) {
    sequenceIndex > sequence.length - 1 ? sequenceIndex = 0 : sequenceIndex;
    currNumbersSum += numbers[numbersIndex] * sequence[sequenceIndex];
    sequenceIndex ++
  }

  if (currNumbersSum === prevNumbersSum) {
    return currNumbersSum;
  } else {
    return thirt(currNumbersSum);
  }
}

// Sample Tests:

thirt(8529)       // 79
thirt(85299258)   // 31
thirt(5634)       // 57
thirt(1111111111) // 71
thirt(987654321)  // 30
