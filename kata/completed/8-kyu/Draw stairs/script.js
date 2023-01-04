// Solution:

function drawStairs(n) {
  let stairs = ''

  for (let i = 0; i < n; i++){
    stairs += `${' '.repeat(i)}I${i < n - 1 ? '\n' : ''}`
  }

  return stairs.trim();
}

// Sample Tests:

drawStairs(1), "I"
drawStairs(3), "I\n I\n  I"
drawStairs(5), "I\n I\n  I\n   I\n    I"
