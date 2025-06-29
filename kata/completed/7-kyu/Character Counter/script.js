// Solution:

function validateWord(s) {
  let occurrences = [];

  const characters = s.split('')
                      .map(character => character.toLowerCase())
                      .filter((character, index, array) => index == array.indexOf(character));

  for (let i = 0; i < characters.length; i++) {
    let repetitions = 0;

    for (let j = 0; j < s.length; j++) {
      if (s[j].toLowerCase() === characters[i]) {
        repetitions++
      }
    }

    occurrences.push(repetitions);
  }

  return occurrences.every(repetition => repetition === occurrences[0]);
}

// Sample Tests:

validateWord("ABCabc")    // true
validateWord("abcabc")    // true
validateWord("Abcabc")    // true
validateWord("abc123")    // true
validateWord("abcabcd")   // false
validateWord("abc!abc!")  // true
validateWord("abc:abc")   // false