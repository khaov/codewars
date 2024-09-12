// Solution:

function testit(s) {
  const word ='word'.split('')

  return Math.floor(
            s.split('')
             .filter(symbol => word.includes(symbol.toLowerCase()))
             .reduce((order, letter) => letter.toLowerCase() == word[order % word.length] ? order + 1 : order, 0) / word.length
         )
}

// Sample Tests:

testit("word") // 1
testit("hello world") // 1
testit("I love codewars.") // 0
testit("My cat waiting for a dog.") // 1
testit("We often read book, a word hidden in the book.") // 2
testit("When you in order to do something by a wrong way, your heart will missed somewhere.") // 2
testit("This sentence have one word.") // 1
testit("This sentence have two word, not one word.") // 2
testit("One word + one word = three word ;-)") // 3
testit("Can you find more word for me?") // 1
