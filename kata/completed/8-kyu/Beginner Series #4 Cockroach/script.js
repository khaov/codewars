// Solution:

function cockroachSpeed(s) {
  return Math.floor(s * 100000 / 3600);
}

// Sample Tests:

cockroachSpeed(1.08)  // 30
cockroachSpeed(1.09)  // 30
cockroachSpeed(0)     // 0
