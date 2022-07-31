// Solution:

function fibonacci(n) {
  if (n > 0) {
    let fibonacciArray = [0, 1];
    for(let i = 2; i < n; i++) {
      fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1]);
    }
    return fibonacciArray;
  } else {
    return [];
  }
}

// Sample Tests:

fibonacci(5).length     // 5, "Expected 5 elements"
fibonacci(5)[4]         // 3, "Last element for input 5 should be 3"
fibonacci(13)[12]       // 144, "Last element for input 13 should be 144"
fibonacci(-5).length    // 0, "Expected 0 elements for negative input"
fibonacci(0).length     // 0 "Expected 0 elements for 0 input"
