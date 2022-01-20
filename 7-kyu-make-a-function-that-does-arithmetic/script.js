// Solution:

function arithmetic(a, b, operator){

  const operation = {
    "add":      (a, b) => a + b,
    "subtract": (a, b) => a - b,
    "multiply": (a, b) => a * b,
    "divide":   (a, b) => a / b
  };

  return operation[operator](a, b);

}

// Sample Tests:

arithmetic(1, 2, "add")       // 3
arithmetic(8, 2, "subtract")  // 6
arithmetic(5, 2, "multiply")  // 10
arithmetic(8, 2, "divide")    // 4