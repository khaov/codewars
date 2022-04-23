// Solution:

function solve(s){
  const vowels = 'aeiou';
  let vowelsCounter = 0;
  let chainLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vowelsCounter++;
      if (vowelsCounter > chainLength) {
        chainLength = vowelsCounter;
      }
    } else {
      vowelsCounter = 0;
    }
  }
  return chainLength;
 }

// Sample Tests:

solve("codewarriors") // 2
solve("suoidea") // 3
