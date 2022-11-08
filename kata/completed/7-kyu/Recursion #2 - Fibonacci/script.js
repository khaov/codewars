// Solution:

const fibonacci = n => {
  return n == 0 ? 0 :
         n == 1 ? 1 :
         fibonacci(n - 1) + fibonacci(n - 2);
};

// Sample Tests:

fibonacci(1) // 1
fibonacci(2) // 1
fibonacci(3) // 2
fibonacci(4) // 3
