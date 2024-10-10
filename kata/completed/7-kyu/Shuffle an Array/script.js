// Solution:

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5)
}

// Sample Tests:

shuffle([1,2,3,4]) // [3,1,4,2]
