// Solution:

function removeOrAdd (string) {
	return string.split(' ')
    .map(word =>
      word[word.length - 1] === '!' && word[word.length - 2] === '!' ?
        word :
        word[word.length - 1] === '!'?
          word.slice(0, word.length - 1) :
          word + '!'
    ).join(' ');
}

// Sample Tests:

removeOrAdd("Hi!");             // "Hi"
removeOrAdd("Hi! Hi!");         // "Hi Hi"
removeOrAdd("Hi! Hi");          // "Hi Hi!"
removeOrAdd("Hi! Hi Hi!!");     // "Hi Hi! Hi!!"
removeOrAdd("!Hi! !Hi !Hi!!");  // "!Hi !Hi! !Hi!!"
