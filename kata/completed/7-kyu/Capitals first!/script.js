// Solution:

function capitalsFirst(str) {
  const worsdArray = str.split(" ");
  let capitalsWords = [];
  let lowercaseWords = [];

  worsdArray.forEach(word => 
    word[0] == word[0].toUpperCase() ?
    capitalsWords.push(word) :
    lowercaseWords.push(word)
  );

  return capitalsWords.filter(word => word[0].match(/[A-Z]/))
                      .concat(lowercaseWords.filter(word => word[0].match(/[a-z]/)))
                      .join(' ');
}

// Sample Tests:

capitalsFirst("hey You, Sort me Already!") // "You, Sort Already! hey me"