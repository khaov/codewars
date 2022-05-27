// Solution:

const ODD = "Odd";
const EVEN = "Even";
const EITHER = "Either";

function oddOrEven(n) {
  if(n % 2 === 0){
    return (n / 2) % 2 === 0 ? EVEN : ODD;
  } else {
    return EITHER;
  }
}

// Sample Tests:

oddOrEven(1) // EITHER
oddOrEven(6) // ODD
oddOrEven(8) // EVEN
