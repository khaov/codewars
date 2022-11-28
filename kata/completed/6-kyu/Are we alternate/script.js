// Solution:

function isAlt(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const oddLetters = word.split('').filter((item, index) => index % 2 === 0);
  const evenLetters = word.split('').filter((item, index) => index % 2 !== 0);

  return oddLetters.every(letter => vowels.includes(letter)) && evenLetters.every(letter => !vowels.includes(letter)) ||
         oddLetters.every(letter => !vowels.includes(letter)) && evenLetters.every(letter => vowels.includes(letter))
}

// Sample Tests:

isAlt("amazon");  // true
isAlt("apple");   // false
isAlt("banana");  // true
