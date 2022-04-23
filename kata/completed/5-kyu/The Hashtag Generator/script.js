// Solution:

function generateHashtag (str) {

  let sourceString = []

  str.split(' ').map(function(word){
    if (word !== ''){
      sourceString.push(word[0].toUpperCase() + word.slice(1, word.length));
    }
  });

  const resultString = sourceString.join('')

  if(resultString.length > 139 || resultString.length === 0){
    return false
  } else {
    return `#${resultString}`
  }

}

// Sample Tests:

generateHashtag(" Hello there thanks for trying my Kata") // "#HelloThereThanksForTryingMyKata"
generateHashtag("    Hello     World   ") // "#HelloWorld"
generateHashtag("") // false, "Expected an empty string to return false"
generateHashtag(" ".repeat(200)) // false, "Still an empty string"
generateHashtag("Do We have A Hashtag") // "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning."
generateHashtag("Codewars") // "#Codewars", "Should handle a single word."
generateHashtag("Codewars Is Nice") // "#CodewarsIsNice", "Should remove spaces."
generateHashtag("Codewars is nice") // "#CodewarsIsNice", "Should capitalize first letters of words."
generateHashtag("code" + " ".repeat(140) + "wars") // "#CodeWars"
generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat") // false, "Should return false if the final word is longer than 140 chars."
generateHashtag("a".repeat(139)) // "#A" + "a".repeat(138) "Should work"
generateHashtag("a".repeat(140)) // false, "Too long"
