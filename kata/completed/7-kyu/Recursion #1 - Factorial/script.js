// Solution:

const factorial = n => {
  return n < 1 ? 1 : n * factorial(n - 1);
};

// Sample Tests:

factorial(0) // 1
factorial(1) // 1
factorial(2) // 2
factorial(3) // 6
