// Solution:

function derive(coefficient,exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`
}

// Sample Tests:

derive(7,8) // "56x^7"
derive(5,9) // "45x^8"
