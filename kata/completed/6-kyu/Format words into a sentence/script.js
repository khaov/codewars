// Solution:

function formatWords(words){
  if (words){
    const originalWords = words.filter(word => word.length);

    switch (originalWords.length) {
      case 0:
        return ''
        break;
      case 1:
        return originalWords[0]
        break;
      case 2:
        return originalWords.join(' and ')
        break;
      default:
        const baseWords = originalWords.slice(0, originalWords.length - 1);
        const lastWord = originalWords.pop();

        return  `${baseWords.join(', ')} and ${lastWord}`
    }
  } else {
    return '';
  }
}

// Sample Tests:

formatWords(['one', 'two', 'three', 'four'])  // 'one, two, three and four'
formatWords(['one'])                          // 'one'
formatWords(['one', '', 'three'])             // 'one and three'
formatWords(['', '', 'three'])                // 'three'
formatWords(['one', 'two', ''])               // 'one and two'
formatWords([])                               // ''
formatWords(null)                             // ''
formatWords([''])                             // ''
