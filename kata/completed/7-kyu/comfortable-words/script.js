// Solution:

const comfortableWord = word => {
  const leftKeys  = ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b']
  const rightKeys = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'n', 'm']

  let validationArray = []

  if (leftKeys.includes(word[0])) {
    word.split('').map(function(letter, index){

      if (index % 2 !== 0){
        if (rightKeys.includes(letter)){
          validationArray.push(true)
        } else {
          validationArray.push(false)
        }
      }

      if (index % 2 === 0){
        if (leftKeys.includes(letter)){
          validationArray.push(true)
        } else {
          validationArray.push(false)
        }
      }

    });
  }

  if (rightKeys.includes(word[0])) {
    word.split('').map(function(letter, index){

      if (index % 2 !== 0){
        if (leftKeys.includes(letter)){
          validationArray.push(true)
        } else {
          validationArray.push(false)
        }
      }

      if (index % 2 === 0){
        if (rightKeys.includes(letter)){
          validationArray.push(true)
        } else {
          validationArray.push(false)
        }
      }

    });
  }

  return validationArray.every(key => key === true)

};



// Sample Tests:

let word = 'yams';
comfortableWord(word) // true

// let word = 'test';
// comfortableWord(word) // false
