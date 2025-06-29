// Solution:

function modifiedSum(a, n) {
  const powerSum = a.reduce((sum, num) => sum += Math.pow(num, n), 0);
  const originalSum = a.reduce((sum, num) => sum += num, 0);

  return powerSum - originalSum;
}

// Sample Tests:

modifiedSum([1, 2, 3], 3) // 30
modifiedSum([1, 2], 5)    // 30