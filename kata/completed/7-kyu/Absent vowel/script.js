// Solution:

function absentVowel(x) {
  const vowels = "aeiou".split('');

  const stringVowels = x.split('').filter(letter => vowels.includes(letter));

  return vowels.indexOf(vowels.filter(letter => !stringVowels.includes(letter)).join(''));
}

// Sample Tests:

absentVowel("John Doe hs seven red pples under his bsket")          // 0
absentVowel("Bb Smith sent us six neatly arranged range bicycles")  // 3