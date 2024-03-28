// Solution:

function flipNumber(n) {
  let result = "";
  let length = n.length;
  let numbers = n.split("");

  for (let index = 0; index < length; index++) {
    numbers.reverse();
    result += numbers[0];
    numbers.shift();
  }

  return result;
}

// Sample Tests:

flipNumber("012")         // "201"
flipNumber("012345")      // "504132"
flipNumber("0123456789")  // "9081726354"
