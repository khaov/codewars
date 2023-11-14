// Solution:

var removeVowels = function(str){
  const vowels = ["a", "e", "i", "o", "u"];
  return str.split("").filter(letter => !vowels.includes(letter)).join("");
}

// Sample Tests:

removeVowels("drake") // "drk"
removeVowels("aeiou") // ""
