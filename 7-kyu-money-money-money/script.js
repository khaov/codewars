// Solution:

function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while (principal < desired) {
    principal = (principal + principal * interest) - (principal * interest * tax);
    years++
  }
  return years;
}

// Sample Tests:

calculateYears(1000, 0.05, 0.18, 1100) // 3
calculateYears(1000,0.01625,0.18,1200) // 14
calculateYears(1000,0.05,0.18,1000)    // 0