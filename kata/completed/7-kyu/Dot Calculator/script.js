// Solution:

function dotCalculator (equation) {
  const operator = equation.split(" ")[1];
  const firstElement =  equation.split(" ")[0].length;
  const secondElement = equation.split(" ")[2].length;

  switch (true) {
    case (operator === "+"):
      return `${'.'.repeat(firstElement + secondElement)}`
      break;
    case (operator === "-"):
      return `${'.'.repeat(firstElement - secondElement)}`
      break;
    case (operator === "*"):
      return `${'.'.repeat(firstElement * secondElement)}`
      break;
    case (operator === "//"):
      return `${'.'.repeat(firstElement / secondElement)}`
      break;
  }
}

// Sample Tests:

dotCalculator("..... + ...............");  // "...................."
dotCalculator("..... - ...");              // ".."
dotCalculator("..... - .");                // "...."
dotCalculator("..... * ...");              // "..............."
dotCalculator("..... * ..");               // ".........."
dotCalculator("..... // ..");              // ".."
dotCalculator("..... // .");               // "....."
dotCalculator(". // ..");                  // ""
dotCalculator(". - .");                    // ""
