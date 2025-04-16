// Solution:

function freqSeq(str, sep) {
  let characters = {};
  const charactersList = str.split('');
  const uniqueCharacters = charactersList.filter((character, index, array) => index == array.lastIndexOf(character));

  uniqueCharacters.forEach(uniqueCharacter => characters[uniqueCharacter] = `${charactersList.filter(character => character === uniqueCharacter).length}`);

  return charactersList.map(character => characters[character]).join(sep);
}

// Sample Tests:

freqSeq('hello world', '-') // '1-1-3-3-2-1-1-2-1-3-1'
freqSeq('19999999',    ':') // '1:7:7:7:7:7:7:7'
freqSeq('^^^**$',      'x') // '3x3x3x2x2x1'