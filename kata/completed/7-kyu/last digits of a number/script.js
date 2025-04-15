// Solution:

function lastDigit(n, d) {
  const integer =  n.toString().split('').map(number =>Number(number));
  const length = integer.length

  return  d > 0 ?
    d <= length ?
      integer.slice(-d) :
      integer :
    [];
}

// Sample Tests:

// "d > 0"
lastDigit(1,1)                // [1]
lastDigit(123767,4)           // [3,7,6,7]
lastDigit(0,1)                // [0]
lastDigit(34625647867585,10)  // [5,6,4,7,8,6,7,5,8,5]

// "d <= 0"
lastDigit(1234,0)             // []
lastDigit(24134,-4)           // []

// "d > number of digits in n"
lastDigit(1343,5)             // [1,3,4,3]
