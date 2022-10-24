// Solution:

function deepCount(a) {
  return a.reduce((depth, element) => depth += Array.isArray(element) ? deepCount(element) : 0, a.length);
}

// Sample Tests:

deepCount([])                   // 0, "Expected 0"
deepCount([1, 2, 3])            // 3, "Expected 3"
deepCount(["x", "y", ["z"]])    // 4, "Expected 4"
deepCount([1, 2, [3, 4, [5]]])  // 7, "Expected 7"
deepCount([[[[[[[[[]]]]]]]]])   // 8, "Expected 8"
