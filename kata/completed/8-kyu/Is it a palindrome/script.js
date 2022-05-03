// Solution:

function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
}

// Sample Tests:

isPalindrome("a")     // true
isPalindrome("aba")   // true
isPalindrome("Abba")  // true
isPalindrome("hello") // false
isPalindrome("Bob")   // true
isPalindrome("Madam") // true
isPalindrome("AbBa")  // true
isPalindrome("")      // true
