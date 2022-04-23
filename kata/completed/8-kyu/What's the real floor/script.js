// Solution:

function getRealFloor(n) {
  if (n > 13) {
    return n - 2
  } else if (n > 0 && n < 13) {
    return n - 1
  } else {
    return n
  }
}

// Sample Tests:

getRealFloor(1)   // 0
getRealFloor(5)   // 4
getRealFloor(15)  // 13
