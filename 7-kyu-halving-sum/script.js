// Solution:

function halvingSum(n) {
  let sum = n;

  for (let i = 2; i <= n; i*=2) {
    sum = sum + Math.floor(n / i);
  }

  return sum;
}

// Sample Tests:

halvingSum(25) // 47
halvingSum(127) // 247
