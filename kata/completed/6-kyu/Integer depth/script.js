// Solution:

function computeDepth (x) {
  let depth = 1;
  let digits = [];

  while (digits.length !== 10) {
    (x * depth).toString().split('').forEach(function(number) {
      if (!digits.includes(number)) {
        digits.push(number);
      }
    });

    depth++
  }

  return depth - 1;
}

// Sample Tests:

computeDepth(1)   // 10
computeDepth(42)  // 9
