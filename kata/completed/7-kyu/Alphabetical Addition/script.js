// Solution:

function addLetters(...letters) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  if(letters.length === 0) {
    return 'z';
  } else {
    let letterIndex = 0;

    for(let i = 0; i < letters.length; i++){
      letterIndex += alphabet.indexOf(letters[i]) + 1

      if(letterIndex > 26){
        letterIndex = letterIndex - 26;
      }
    }
    return alphabet[letterIndex - 1]
  }
}

// Sample Tests:

addLetters('a', 'b', 'c') // 'f'
addLetters('a', 'b')      // 'c'
addLetters('z')           // 'z'
addLetters('z', 'a')      // 'a'
addLetters('y', 'c', 'b') // 'd' notice the letters overflowing
addLetters()              // 'z'

addLetters("u", "z", "w", "n", "d", "y", "s", "c", "z")
