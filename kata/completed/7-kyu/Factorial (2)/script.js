// Solution:

function factorial(n){
  return n ? n * factorial(n - 1) : 1;
}

// Sample Tests:

factorial(0)  // 1
factorial(1)  // 1
factorial(4)  // 24
factorial(7)  // 5040
factorial(17) //  355687428096000
