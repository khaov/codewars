// Solution:

function scrabbleScore(str){
  return str.split('')
            .map(letter => $dict[letter.toUpperCase()])
            .filter(value => value !== undefined)
            .reduce((sum, num) => sum += num, 0);
}

// Sample Tests:

scrabbleScore("")         // 0
scrabbleScore('a')        // 1
scrabbleScore("street")   // 6

scrabbleScore(' a')       // 1
scrabbleScore("st re et") // 6
