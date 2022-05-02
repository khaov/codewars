// Solution:

function solve(s) {
  let vowels = 'aeiou'.split('');

  // let alternate = [];
  // let alternateLength = 0;
  
  // let vowelsLetters =[];
  // let consonantsLetters =[];
  
  // s.split('').forEach(function(letter){
  //   if (vowels.includes(letter)) {
  //     vowelsLetters.push(letter);
  //   }else {
  //     consonantsLetters.push(letter);
  //   }
  // });
  
  // vowelsLetters.sort();
  // consonantsLetters.sort();
  // alternateLength = Math.max(vowelsLetters.length, consonantsLetters.length);
  
  // for (let i = 0; i < alternateLength; i++) {
  //   if (vowelsLetters[i] && consonantsLetters[i]) {
  //     alternate.push(vowelsLetters[i])
  //     alternate.push(consonantsLetters[i])
  //   } else {
  //     alternate = ['failed']
  //     break;
  //   }
  // }
  
  // return alternate.join('')

};

// Sample Tests:

solve("have")     // 'ahev'
// solve("java")     // 'ajav'
// solve("oruder")   // 'edorur'
// solve("zodiac")   // 'acidoz'
// solve("apple")    // 'lapep'
// solve("acidity")  // 'caditiy'
// solve("codewars") // 'failed'
// solve("orudere")  // 'ederoru'
