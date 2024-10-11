// Solution:

function spEng(sentence) {
  return sentence.toLowerCase().includes('english');
}

// Sample Tests:

spEng("english")        // true
spEng("egnlish")        // false

spEng("abcEnglishdef")  // true
spEng("abcnEglishsef")  // false

spEng("eNglisH")        // true
