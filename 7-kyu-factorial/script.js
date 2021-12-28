// Solution:

function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError('Range must be between 0 and 12');
  } else {
    return n ? n * factorial(n - 1) : 1;
  }
}

// Sample Tests:

factorial(0) // 1, "factorial for 0 is 1"
factorial(1) // 1, "factorial for 1 is 1"
factorial(2) // 2, "factorial for 2 is 2"
factorial(3) // 6, "factorial for 3 is 6"
