// Solution:

function betweenExtremes(numbers) {
  return Math.max.apply(null, numbers) - Math.min.apply(null, numbers);
}

// Sample Tests:

betweenExtremes([21, 34, 54, 43, 26, 12]) // 42
betweenExtremes([-1, -41, -77, -100])     // 99
