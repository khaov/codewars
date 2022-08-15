// Solution:

function leastLarger(a,i) {
  const largerNumbers = a.filter(num => num > a[i]).sort((prev, next) => prev - next);
  return a.indexOf(largerNumbers[0]);
}

// Sample Tests:

leastLarger( [4, 1, 3, 5, 6], 0 ) // 3
leastLarger( [4, 1, 3, 5, 6], 4 ) // -1
leastLarger( [1, 3, 5, 2, 4], 0 ) // 3
