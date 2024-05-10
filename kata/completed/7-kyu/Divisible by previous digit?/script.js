// Solution:

function divisibleByLast(n) {
  return n.toString()
          .split('')
          .map((number, index, array) =>
            Number(number) % Number(array[index - 1]) === 0
          );
}

// Sample Tests:

divisibleByLast(73312)  // [false, false, true, false, true]
divisibleByLast(2026)   // [false, true, false, true]
divisibleByLast(635)    // [false, false, false]
divisibleByLast(1337)   // [false, true, true, false]
