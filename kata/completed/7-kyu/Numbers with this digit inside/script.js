// Solution:

function numbersWithDigitInside(x, d) {
  const numbers = Array(x).fill().map((_, index) => index + 1)
                          .filter(number =>number.toString().split('').includes(d.toString()));

  const count = numbers.length;
  const sum = numbers.reduce((sum, number) => sum += number, 0);
  const product = count > 0 ? numbers.reduce((product, number) => product *= number, 1) : 0;

  return [count, sum, product];
}

// Sample Tests:

numbersWithDigitInside(5,6)   // [ 0, 0, 0 ]
numbersWithDigitInside(1,0)   // [ 0, 0, 0 ]
numbersWithDigitInside(7,6)   // [ 1, 6, 6 ]
numbersWithDigitInside(11,1)  // [ 3, 22, 110 ]
numbersWithDigitInside(20,0)  // [ 2, 30, 200 ]
numbersWithDigitInside(44,4)  // [ 9, 286, 5955146588160 ]
