// Solution:

function triangular( n ) {
  let number = 0;

  if (n <= 0) {
    number = 0
  } else {
    number = 0.5 * n * (n + 1)
  }

  return number
}

// Sample Tests:

triangular(1)   // 1
triangular(2)   // 3
triangular(3)   // 6
triangular(4)   // 10
triangular(-10)  // 0
triangular(1966042785) // 1932662117208299500
