// Solution:

function remove(s){
  return s.split(' ').map(function(word) {
    let beginningIndex = 0;
    let endingIndex = word.length;

    word.split('').forEach(function(symbol, index, array){
      if(symbol === '!' && (array[index + 1] && array[index + 1] !== '!') ){
        beginningIndex = index + 1;
      }
      if(symbol === '!' && (array[index - 1] && array[index - 1] !== '!') ){
        endingIndex = index;
      }
    })

    const beginning = word.split('').slice(0, beginningIndex).join('')
    const ending = word.split('').slice(endingIndex).join('')
    const center = word.split('').filter(symbol => symbol !== '!').join('')

    return beginning.length >= ending.length ?
           ending + center + ending :
           beginning + center + beginning;
  }).join(' ');
}

// Sample Tests:

remove("Hi!")                     // "Hi"
remove("!Hi! Hi!")                // "!Hi! Hi"
remove("!!Hi! !Hi!!")             // "!Hi! !Hi!"
remove("!!!!Hi!! !!!!Hi !Hi!!!")  // "!!Hi!! Hi !Hi!"
