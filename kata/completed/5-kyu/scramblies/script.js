// Solution:

function scramble(str1, str2) {
  if (str1.length >= str2.length){

    function lettersCounter(string){
      return string.split('').reduce((acc, item) => {
        acc[item] = acc[item] ? acc[item] + 1 : 1;
        return acc;
      }, {});
    }

    const setLetters = lettersCounter(str1)
    const mapLetters = lettersCounter(str2)

    lettersArray = []

    for (letter in mapLetters) {
      if ( str1.includes(letter) && mapLetters[letter] <= setLetters[letter]) {
        continue
      } else {
        return false
      }
    }
    return true
    
  } else {
    return false
  }
}

// Sample Tests:

scramble('rkqodlw','world')               // true
scramble('cedewaraaossoqqyt','codewars')  // true
scramble('katas','steak')                 // false
scramble('scriptjava','javascript')       // true
scramble('scriptingjava','javascript')    // true
scramble('scriptsjava','javascripts')     // true
scramble('jscripts','javascript')         // false
scramble('aabbcamaomsccdd','commas')      // true
