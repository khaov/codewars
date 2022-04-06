// Solution:

var palindromeChainLength = function(n) {

  function palindrome(number) {
    return Number(number.toString().split('').reverse().join(''))
  }

  if (n === palindrome(n)) {
    return 0;
  } else {
    let chainLength = 0;
    let chainNumber = n;
    while (chainNumber !== palindrome(chainNumber)) {
      chainNumber = chainNumber + palindrome(chainNumber)
      chainLength ++
    }
    return chainLength
  }

};

// Sample Tests:

palindromeChainLength(1)  //  0
palindromeChainLength(88) //  0
palindromeChainLength(87) //  4
palindromeChainLength(89) //  24
palindromeChainLength(10) //  1
