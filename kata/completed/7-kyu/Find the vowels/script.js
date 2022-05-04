// Solution:

function vowelIndices(word) {
  const vowels ='aeiouy'
  let incides = [];

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      incides.push(i + 1);
    }
  }

  return incides;
}

// Sample Tests:

vowelIndices("mmm")     // []
vowelIndices("apple")   // [1,5]
vowelIndices("super")   // [2,4]
vowelIndices("orange")  // [1,3,6]
vowelIndices("supercalifragilisticexpialidocious") // [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]
