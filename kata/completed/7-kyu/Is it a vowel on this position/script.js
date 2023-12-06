// Solution:

function checkVowel(string, position) {
  const vowel = 'aeiou'.split('');
  const letter = string.split('')[position];
  
  return letter ? vowel.includes(letter.toLowerCase()) : false;
};

// Sample Tests:

checkVowel('cat', 1)      // true
checkVowel('cat', 0)      // false
checkVowel('cat', 4)      // false

checkVowel('Amanda', -2)  // false
checkVowel('Amanda', 0)   // true
checkVowel('Amanda', 2)   // true