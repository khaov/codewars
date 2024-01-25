// Solution:

function reduce(fraction) {
  const common = fraction[1] >= fraction[0] ? fraction[1] : fraction[0];

  for (var i = 1; i <= common; i++) {
    if (fraction[0] % i === 0 && fraction[1] % i === 0) {
      M = fraction[0] / i;
      N = fraction[1] / i;
    }
  }

  return [M, N];
}

// Sample Tests:

reduce([60, 20])  // [3, 1]
reduce([80, 120]) // [2, 3]
reduce([4, 2])    // [2, 1]
reduce([45, 120]) // [3, 8]
reduce([1000, 1]) // [1000, 1]
reduce([1, 1])    // [1, 1]
