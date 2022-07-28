// Solution:

function twistedSum(n) {
  let resSum = 0;

  for (let i = 1; i <= n; i++) {
    resSum += i.toString().split('').reduce((numSum, num) => numSum += Number(num), 0);
  }

  return resSum;
}

// Sample Tests:

twistedSum(3)  // 6   "n = 3"
twistedSum(10) // 46, "n = 10"
twistedSum(11) // 48, "n = 11"
twistedSum(12) // 51, "n = 12"
