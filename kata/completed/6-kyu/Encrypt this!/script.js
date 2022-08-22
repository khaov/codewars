// Solution:

var encryptThis = function(text) {
  return text.split(' ').map(function(word) {
    let encryptWord = word[0].charCodeAt(0);

    const wordBody = word.slice(2, word.length - 1);
    const secondLetter = word[word.length - 1];
    const lastLeeter = word[1];

    if (word.length >= 4) {
      return encryptWord += secondLetter + wordBody + lastLeeter;
    } else if (word.length === 3) {
      return encryptWord += secondLetter + lastLeeter;
    } else if(word.length === 2) {
      return encryptWord += secondLetter;
    } else {
      return encryptWord;
    }

  }).join(' ');
}

// Sample Tests:

encryptThis("A") // "65"
encryptThis("A wise old owl lived in an oak") // "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
encryptThis("The more he saw the less he spoke") // "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
encryptThis("The less he spoke the more he heard") // "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
encryptThis("Why can we not all be like that wise old bird") // "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri"
encryptThis("Thank you Piotr for all your help") // "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple"
