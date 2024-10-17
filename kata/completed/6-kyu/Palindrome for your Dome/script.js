// Solution:

function palindrome(string) {
  const characters = "abcdefghijklmnopqrstuvwxyz1234567890".split('');

  const сase = string.toLowerCase().split('').filter(character => characters.includes(character));

  return сase.join('') === сase.reverse().join('');
}

// Sample Tests:

palindrome("");                                   // true
palindrome("101");                                // true
palindrome("911");                                // false
palindrome("RotaTor");                            // true
palindrome("A man, a plan, a canal - Panama");    // true
palindrome("Abba Zabba, you're my only friend");  // false
palindrome("Under_scores; Serocsrednu");          // true
palindrome("Eva: Can I see bees in a cave?");     // true
palindrome("Madam? I'm Adam!");                   // true
