// Solution:

function pigIt(str){
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

  return str.split(' ').map(function(word) {

    alphabetPart = '';
    punctuationPart ='';

    word.split('').forEach(function(character){
      if (alphabet.indexOf(character.toLowerCase()) > -1) {
        alphabetPart = alphabetPart + character;
      } else {
        punctuationPart = punctuationPart + character;
      }
    });

    if (alphabetPart.length > 0 ){
      return alphabetPart.slice(1) + alphabetPart.slice(0, 1) + 'ay' + punctuationPart;
    } else {
      return punctuationPart
    }

  }).join(' ');
}

// Sample Tests:

pigIt('Pig latin is cool') // 'igPay atinlay siay oolcay'
pigIt('This is my string') // 'hisTay siay ymay tringsay'
pigIt('Hello world !')     // 'elloHay orldway !'