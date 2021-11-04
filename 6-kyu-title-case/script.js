// Solution:

function titleCase(title, minorWords) {
  const sourceArray = title.split(' ').map(function(word) { 
    return word.toLowerCase();
  });
  if (minorWords) {
    sourceArray
    return sourceArray.map(function (word, index){
      if (word !== '' && index === 0 || minorWords.toLowerCase().split(' ').indexOf(word) === -1){
        return word[0].toUpperCase() + word.substring(1);
      } else {
        return word;
      }
    }).join(' ');
  } else {
    return sourceArray.map(function (word) {
      if (word !== '') {
        return word[0].toUpperCase() + word.substring(1);
      }
    }).join(' ');
  }
}

// Sample Tests:

titleCase('a clash of KINGS', 'a an the of'); // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In'); // should return: 'The Wind in the Willows'
titleCase('the quick brown fox'); // should return: 'The Quick Brown Fox'
titleCase('First a of in', 'an often into'); // should return: 'First A Of In'