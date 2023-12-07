// Solution:

const divisions = (n, divisor) => {
  let counter = 0;

  while (n >= 1) {
    counter++
    n = n / divisor;
  }

  return counter - 1;
};

// Sample Tests:

divisions(6, 2)     // 2
divisions(100, 2)   // 6
divisions(2450, 5)  // 4
divisions(9999, 3)  // 8
divisions(2, 3)     // 0
divisions(5, 5)     // 1
