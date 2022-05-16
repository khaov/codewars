// Solution:

function seven(m) {
  let number = m;
  let steps = 0;

  while (number.toString().length > 2) {
    let remainingDigits = Number(number.toString().slice(0, number.toString().length - 1))
    let lastDigit = Number(number.toString().slice(number.toString().length - 1))

    number = remainingDigits - lastDigit * 2;
    steps++;
  }

  return [number, steps]
}

// Sample Tests:

seven(1021)      // [10, 2]
seven(1603)      // [7, 2]
seven(371)       // [35, 1]
seven(483)       // [42, 1]
seven(477557101) // [28, 7]
