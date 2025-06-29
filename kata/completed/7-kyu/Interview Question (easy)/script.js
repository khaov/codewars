// Solution:

function getStrings(city) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  function repetitions(letter, array) {
    return "*".repeat(array.filter(character => character === letter).length);
  }

  const letters = city.split('').filter(character => alphabet.includes(character.toUpperCase()))
                                .map(character => character.toLowerCase());

  const uniqueLetters = letters.filter((letter, index, array) => index === array.indexOf(letter));

  return uniqueLetters.map(character => `${character}:${repetitions(character, letters)}`).join(',');
}

// Sample Tests:

getStrings("Chicago")   // "c:**,h:*,i:*,a:*,g:*,o:*"
getStrings("Bangkok")   // "b:*,a:*,n:*,g:*,k:**,o:*"
getStrings("Las Vegas") // "l:*,a:**,s:**,v:*,e:*,g:*"
