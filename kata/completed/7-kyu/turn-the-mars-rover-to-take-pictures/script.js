// Solution:

function turn(current, target) {
  if (
    current ==='N' && target === 'W' ||
    current ==='W' && target === 'S' ||
    current ==='S' && target === 'E' ||
    current ==='E' && target === 'N'
  ) {
    return 'left'
  } else {
    return 'right'
  }
}

// Sample Tests:

turn('N', 'W') // 'left'
turn('N', 'E') // 'right'
turn('S', 'W') // 'right'
