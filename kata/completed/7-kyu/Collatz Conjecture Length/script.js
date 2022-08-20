// Solution:

function collatz(n) {
  function collatzNumber(n) {
    return n % 2 === 0 ? n / 2 : n * 3 + 1
  }

  let sequence = [n];
  let sequenceNumber = n;

  while (sequenceNumber !== 1) {
    sequenceNumber = collatzNumber(sequenceNumber);
    sequence.push(sequenceNumber);
  }

  return sequence.length;
}

// Sample Tests:

collatz(20) // 8
collatz(15) // 18
