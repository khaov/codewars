// Solution:

function isPalindrome(line) {
  return line.toString() === line.toString().split('').reverse().join('');
}

// Sample Tests:

isPalindrome("anna")    // true
isPalindrome("walter")  // false
isPalindrome(12321)     // true
isPalindrome(123456)    // false
isPalindrome(".")       // true
isPalindrome(".!!.")    // true
