// Solution:

function calculate(num1, operation, num2) {
  const operations = ['+', '-', '*', '/']

  switch (true) {
    case (!operations.includes(operation) || (operation === '/' && num2 === 0)): return null; break;
    case (operation === "+"): return num1 + num2; break;
    case (operation === "-"): return num1 - num2; break;
    case (operation === "/"): return num1 / num2; break;
    case (operation === "*"): return num1 * num2; break;
  }
}

// Sample Tests:

calculate(3.2,"+", 8) // 11.2, "3.2 + 8 = 11.2"
calculate(3.2,"-", 8) // -4.8, "3.2 - 8 = -4.8"
calculate(3.2,"/", 8) // 0.4, "3.2 / 8 = .4"
calculate(3.2,"*", 8) // 25.6, "3.2 * 8 = 25.6"
calculate(-3,"+", 0)  // -3, "-3 + 0 = -3"
calculate(-3,"-", 0)  // -3, "-3 - 0 = -3"
calculate(-3,"/", 0)  // null, "-3 / 0 = null"
calculate(-3,"*", 0)  // 0, "-3 * 0 = 0"
calculate(-3,"w", 0)  // null, "-3 w 0 = null"
