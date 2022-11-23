// Solution:

function nextPal(val) {
  const nextPalindrome = number => number.toString() === number.toString().split('').reverse().join('');

  let palindrome = val + 1;

  while(nextPalindrome(palindrome) !== true) {
    palindrome++
  }

  return palindrome
}

// Sample Tests:

nextPal(11)   // 22
nextPal(188)  // 191
nextPal(191)  // 202
nextPal(2541) // 2552
