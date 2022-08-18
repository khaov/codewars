// Solution:

function pillars(numPill, dist, width) {
  return numPill < 2 ? 0 : width * (numPill - 2) + dist * 100 * (numPill - 1)
}

// Sample Tests:

pillars(1, 10, 10)  // 0
pillars(2, 20, 25)  // 2000
pillars(11, 15, 30) // 15270
