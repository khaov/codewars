// Solution:

function twoDecimalPlaces(n) {
  return Number(n.toFixed(2));
}

// Sample Tests:

twoDecimalPlaces(4.659725356)                 // 4.66
twoDecimalPlaces(173735326.3783732637948948)  // 173735326.38
twoDecimalPlaces(4.653725356)                 // 4.65
