// Solution:

const letters = "cipherabdfgjklmnoqstuvwxyz".split('');

function makeAlphabet (key) {
  key=[...key].join('');
  return (key + [...letters].filter(letter => !key.includes(letter)).join('')).repeat(3);
}


function replaceLetter(letter, word, operation){

}

function encode(text, key) {
  const alphabet = makeAlphabet(new Set(key));

  // https://github.com/Orange9000/Codewars/blob/master/Solutions/6kyu/6kyu_ragbaby_cipher.js

  // return text.split(' ')
  //   .map(word =>
  //     word.split('')
  //         .map((character, index) =>
  //           alphabet.indexOf(character.toLowerCase()) !== -1 ?
  //             character === character.toLowerCase() ?
  //               alphabet[alphabet.indexOf(character.toLowerCase()) + (index + 1)] :
  //               alphabet[alphabet.indexOf(character.toLowerCase()) + (index + 1)].toUpperCase() :
  //           character
  //         )
  //         .join('')
  //   ).join(' ')

}

function decode(text, key) {
  return text;
}

// Sample Tests:

encode("cipher","cipher")                   //"ihrbfj"
encode("cipher","cccciiiiippphheeeeerrrrr") //"ihrbfj"
encode("This is an example.","cipher")      //"Urew pu bq rzfsbtj."
encode("This.tHis.thIs.thiS...","cipher")   //"Urew.uRew.urEw.ureW..."

decode("ihrbfj","cipher")                   // "cipher"
decode("Urew pu bq rzfsbtj.","cipher")      // "This is an example."
decode("Urew.uRew.urEw.ureW...","cipher")   // "This.tHis.thIs.thiS..."

// encode(decode("This is an example.", "secretkey"),"secretkey"), "This is an example."
// decode(encode("This is an example.", "secretkey"),"secretkey"), "This is an example."
