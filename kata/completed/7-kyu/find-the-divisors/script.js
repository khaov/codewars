// Solution:

function divisors(integer) {
  let dividers = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i == 0) {
      dividers.push(i);
    }
  }
  return dividers.length ? dividers : `${integer} is prime`
};

// Sample Tests:

divisors(12) // [2, 3, 4, 6]
divisors(13) // "13 is prime"
divisors(15) // [3, 5]
divisors(25) // [5]
