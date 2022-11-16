// Solution:

function pell(n) {
  if (n < 2) {
    return BigInt(n);
  } else {
    pellNumbers = [0, 1];

    for (let i = 2; i <= n; i++) {
      pellNumbers.push(2 * pellNumbers[i-1] + pellNumbers[i-2]);
    }

    return BigInt(pellNumbers.pop());
  }
}

// Sample Tests:

pell(0)   // 0n
pell(1)   // 1n
pell(2)   // 2n
pell(3)   // 5n
pell(4)   // 12n
pell(100) // 66992092050551637663438906713182313772n
