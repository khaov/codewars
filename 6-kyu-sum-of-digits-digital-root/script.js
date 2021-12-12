// Solution:

function digital_root(n) {
  for (let i = 0; i <= n.toString().length;  i++) {
    const digitsArray = n.toString().split('').map(Number);
    n = digitsArray.reduce(function (digitsSum, item) {
      return digitsSum + item;
    });
  }
  return n;
}

// Sample Tests:

digital_root(16) // 7
digital_root(456) // 6