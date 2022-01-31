// Solution:

function inverseSlice(items, a, b) {
  return items.slice(0, a).concat(items.slice(b));
}

// Sample Tests:

inverseSlice([12, 14, 63, 72, 55, 24], 2, 4) // [12, 14, 55, 24]
inverseSlice([12, 14, 63, 72, 55, 24], 0, 3) // [72, 55, 24]
inverseSlice(['Intuition', 'is', 'a', 'poor', 'guide', 'when', 'facing', 'probabilistic', 'evidence'], 5, 13) // ['Intuition', 'is', 'a', 'poor', 'guide']
