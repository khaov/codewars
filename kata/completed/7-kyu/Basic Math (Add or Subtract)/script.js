// Solution:

function calculate(str) {
  return eval(str.replaceAll('plus', '+').replaceAll('minus', '-')).toString();
}

// Sample Tests:

calculate("1plus2plus3plus4")     // '10'
calculate('1minus2minus3minus4')  // '-8'
calculate('1plus2plus3minus4')    // '2'
