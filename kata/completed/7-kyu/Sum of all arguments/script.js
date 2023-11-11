// Solution:

function sum() {
  let sum = 0;

  for (argument in arguments) {
    sum += arguments[argument];
  }

  return sum;
}

// Sample Tests:

sum(1) // 1
sum(1, 2) // 3
sum(5, 7, 9) // 21
sum(12, 1, 1, 1, 1) // 16
sum(12, 1, 1, 1, 1, 1, 1) // 18
