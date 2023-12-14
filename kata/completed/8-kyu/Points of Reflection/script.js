// Solution:

function symmetricPoint(p, q) {
  return [q[0] * 2 - p[0], q[1] * 2 - p[1]];
}

// Sample Tests:

symmetricPoint([0,0], [1,1])            // [2, 2]
symmetricPoint([2, 6], [-2, -6])        // [-6, -18]
symmetricPoint([10, -10], [-10, 10])    // [-30, 30]
symmetricPoint([1, -35], [-12, 1])      // [-25, 37]
symmetricPoint([1000, 15], [-7, -214])  // [-1014, -443]
symmetricPoint([0, 0], [0, 0])          // [0, 0]
