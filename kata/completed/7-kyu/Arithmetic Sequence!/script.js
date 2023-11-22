// Solution:

var nthterm = function(first, n, c) {
  let value = first;

  for (let i = 0; i < n; i++) {
    value += c
  }

  return value;
}

// Sample Tests:

nthterm(1, 2, 3)      // 7
nthterm(2, 2, 2)      // 6
nthterm(-50, 10, 20)  // 150
