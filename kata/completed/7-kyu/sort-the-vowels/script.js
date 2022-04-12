// Solution:

function sortVowels(s) {
  let vowels = 'aeiou'.split('');
  if (typeof s === 'string') {
    return s.split('').map(function(letter) {
      if (vowels.includes(letter.toLowerCase())) {
        return `|${letter}`
      } else {
        return `${letter}|`
      }
    }).join('\n');
  } else {
    return '';
  }
}

// Sample Tests:

sortVowels('Codewars')  // 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|'
sortVowels('Rnd Te5T')  // 'R|\nn|\nd|\n |\nT|\n|e\n5|\nT|'
sortVowels(1337)        // ''
sortVowels(undefined)   // ''
