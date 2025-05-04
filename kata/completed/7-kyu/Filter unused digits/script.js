// Solution:

function unusedDigits() {
  let numbers = [];

  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (key in arguments) {
    numbers.push(arguments[key]);
  }

  const usedDigits = numbers.join('').split('')
                            .filter((number, index, array) => index == array.lastIndexOf(number))
                            .sort((prev, next) => prev - next).map(numder => Number(numder));

  return digits.filter(digit => !usedDigits.includes(digit)).join('');
}

// Sample Tests:

unusedDigits(12, 34, 56, 78)  // "09"
unusedDigits(2015, 8, 26)     // "3479"