// Solution:

function sumOfN(n) {
  let sequence = [];
  let counter = 0;

  for (let i = 0; i <= Math.abs(n); i++) {
    n < 0 ? counter -= i : counter += i;
    sequence.push(counter);
  }

  return sequence
};

// Sample Tests:

sumOfN(3)   //  [0, 1, 3, 6]
sumOfN(-4)  //  [0, -1, -3, -6, -10]
sumOfN(1)   //  [0, 1]
sumOfN(-6)  //  [0, -1, -3, -6, -10, -15, -21]
