// Solution:

function decipherThis(str) {
  return str.split(' ').map(function(word){
    let wordBeginning = parseInt(word.match(/\d+/));
    let wordRemainder = word.replace (/[^a-z]+/g, '');

    let decryptWord = String.fromCharCode(wordBeginning);

    const wordBody = wordRemainder.slice(1, wordRemainder.length - 1);
    const secondLetter = wordRemainder[wordRemainder.length - 1];
    const lastLeeter = wordRemainder[0];

    switch (wordRemainder.length) {
      case 0:
        return decryptWord;
        break;
      case 1:
        return decryptWord += secondLetter;
        break;
      case 2:
        return decryptWord += secondLetter + lastLeeter;
        break;
      default:
        return decryptWord += secondLetter + wordBody + lastLeeter;
    }
  }).join(' ');
};

// Sample Tests:

decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o') // 'Have a go at this and see how you do'
