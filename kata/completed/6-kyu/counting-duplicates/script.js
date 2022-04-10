// Solution:

function duplicateCount(text){
  let source = text.toLowerCase().split('');
  let duplicates = {};
  let counter = 0;

  // for (let i = 0; i < source.length; i++) {
  //   let duplicate = source.filter(symbol => symbol === source[i])
  //   if (duplicate.length > 1) {
  //     counter++
  //     source = source.filter(symbol => symbol !== source[i])
  //   }
  // }

  // Object solution

  for(var i = 0; i < source.length; i++) {
    var symbol = source[i];
    if(duplicates[symbol]) {
      duplicates[symbol]++;
    } else {
      duplicates[symbol] = 1;
    }
  }

  for(let key in duplicates) {
    if(duplicates[key] > 1) {
      counter++;
    }
  }

  return counter;
}

// Sample Tests:

duplicateCount("")                  // 0
duplicateCount("abcde")             // 0
duplicateCount("aabbcde")           // 2
duplicateCount("aabBcde")           // 2
duplicateCount("Indivisibility")    // 1
duplicateCount("Indivisibilities")  // 2
duplicateCount("aA11")              // 2

// More Tests:

duplicateCount("abcdefghijABCDEABCDabcABA") // 5
