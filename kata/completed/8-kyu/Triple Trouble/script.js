// Solution:

function tripleTrouble(one, two, three){
  const length = one.length
  let result = ''

  for (let i = 0; i < length; i++) {
    result += `${one[i]}${two[i]}${three[i]}`
  }

  return result;
}

// Sample Tests:

tripleTrouble("aaa","bbb","ccc")          // "abcabcabc"
tripleTrouble("aaaaaa","bbbbbb","cccccc") // "abcabcabcabcabcabc"
tripleTrouble("burn", "reds", "roll")     // "brrueordlnsl"
tripleTrouble("Sea","urn","pms")          // "Supermans"
tripleTrouble("LLh","euo","xtr")          // "LexLuthor"
