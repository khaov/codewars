// Solution:

function typeValidation(variable, type) {
  return typeof variable === type;
}

// Sample Tests:

typeValidation(42, "number")    // true
typeValidation("42", "number")  // false
