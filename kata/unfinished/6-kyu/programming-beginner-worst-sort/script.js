function sortByJohn(str){
  var result=[];
  for(var i=0;i<=str.length;i++){          //Traversal string
    var char=String(str[i]);               //Get current char
    if(char=="J") result.push(char);       //If char is
    if(char=="o") result.push(char);       // J o h n
    if(char=="h") result.push(char);       //Puts char to the right side
    if(char=="n") result.push(char);
    result.unshift(char);                  //Else, puts char to the left side
  }
  return result.join(" ");                 //Join the result with a space and return
}

// Solution:

function correctResult(resultOfJohn) {

  // Restore string str

  const character = ["J","o","h","n"]
  let repeatСounter = 0

  let restoreArray = []
  let restoreSring = ""


  let filteredeArray = resultOfJohn.split(' ').filter(item => item !== 'undefined');

  filteredeArray.forEach(function(letter) {
    if (character.includes(letter)) {
      repeatСounter++
    }
  })

  splicedArray = filteredeArray.splice(0, filteredeArray.length-repeatСounter/2)

  splicedArray.forEach(function(item, index, array){
    if (item.length === 0 && array[index + 1].length > 0) {
      restoreArray.push(" ")
    } else if (item.length > 0) {
      restoreArray.push(item)
    }
  })

  restoreSring = restoreArray.reverse().join('')

  // re-sort it
  let resultString = ""
  let resultArray = []
  let arrayleftSide = []
  let arrayrightSide = []

  restoreSring.split('').forEach(function(item) {
    if (character.includes(item)) {
      arrayrightSide.push(item);
    } else {
      arrayleftSide.push(item)
    }
  })

  resultArray.push(arrayleftSide.join(''))
  resultArray.push(arrayrightSide.join(''))

  // return the correct results.

  if (arrayleftSide.length && arrayrightSide.length) {
    return resultString = resultArray.join(' ')
  } else {
    return resultString = resultArray.join('')
  }

}

// Sample Tests:

var resultOfJohn=sortByJohn("John say hello")
correctResult(resultOfJohn) // " say ell Johnho"

var resultOfJohn=sortByJohn("Anne and John are good friends")
correctResult(resultOfJohn) // "Ae ad  are gd frieds nnnJohnoon"

var resultOfJohn=sortByJohn("My name is John")
correctResult(resultOfJohn) // "My ame is  nJohn"

var resultOfJohn=sortByJohn("Hello World")
correctResult(resultOfJohn) // "Hell Wrld oo"

var resultOfJohn=sortByJohn("Hi")
correctResult(resultOfJohn) // "Hi"

var resultOfJohn=sortByJohn("")
correctResult(resultOfJohn) // ""
