// Solution:

function nthFibo(n) {
  const fibonacciArray = [0, 1];

    for(let i = 2; i < n; i++) {
        fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1]);
    }

    return fibonacciArray[n-1];
}

// Sample Tests:

nthFibo(1) // 0, "1-st Fibo"
nthFibo(2) // 1, "2-nd Fibo"
nthFibo(3) // 1, "3-rd Fibo"
nthFibo(4) // 2, "4-th Fibo"
