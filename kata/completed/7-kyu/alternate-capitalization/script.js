// Solution:

function capitalize(s){

  let result = [];

  const evenLetters = s.split('').map((letter, index) => index % 2 === 0 ? letter.toUpperCase() : letter).join('');
  result.push(evenLetters);

  const oddLetters = s.split('').map((letter, index) => index % 2 !== 0 ? letter.toUpperCase() : letter).join('');
  result.push(oddLetters);

  return result;

}

// Sample Tests:

capitalize("abcdef")        //  ['AbCdEf', 'aBcDeF']
capitalize("codewars")      //  ['CoDeWaRs', 'cOdEwArS']
capitalize("abracadabra")   //  ['AbRaCaDaBrA', 'aBrAcAdAbRa']
capitalize("codewarriors")  //  ['CoDeWaRrIoRs', 'cOdEwArRiOrS']
