// Solution:

function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// Sample Tests:

even_or_odd(2)    // "Even"
even_or_odd(7)    // "Odd"
even_or_odd(-42)  // "Even"
even_or_odd(-7)   // "Odd"
even_or_odd(0)    // "Even"
