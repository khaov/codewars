// Solution:

function add(n) {
  return function (m) {
    return n + m;
  }
}

// Sample Tests:

add(1)(3) // 4
add(2)(3) // 5
