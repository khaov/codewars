// Solution:

function sum (numbers) {
  "use strict";
  return numbers.length > 0 ? numbers.reduce((sum, number) => sum + number) : 0
};

// Sample Tests:

sum([]) // 0
sum([1, 5.2, 4, 0, -1]) // 9.2
