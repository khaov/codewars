// Solution:

function solve(s) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let vowels = 'aeiou';

  const consonants = s.split('').map(function(letter){
    if (vowels.includes(letter)){
      return ' '
    } else {
      return letter
    }
  }).join('');

  return consonants.split(' ').map(function(substring){
    if (substring.length !== 0) {
      return substring.split('').reduce((sum, letter) => sum = sum + alphabet.indexOf(letter) + 1, 0);
    } else {
      return 0;
    }
  }).sort((a, b) => b - a)[0];
}

// Sample Tests:

solve("zodiac")           // 26
solve("chruschtschov")    // 80
solve("khrushchev")       // 38
solve("strength")         // 57
solve("catchphrase")      // 73
solve("twelfthstreet")    // 103
solve("mischtschenkoana") // 80
