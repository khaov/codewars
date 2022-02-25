// Solution:

function capitalize(s,arr){
  return s.split('').map((letter, index) => arr.includes(index) ? letter.toUpperCase() : letter).join('')
}

// Sample Tests:

capitalize("abcdef",[1,2,5])          //  'aBCdeF'
capitalize("abcdef",[1,2,5,100])      //  'aBCdeF'
capitalize("codewars",[1,3,5,50])     //  'cOdEwArs'
capitalize("abracadabra",[2,6,9,10])  //  'abRacaDabRA'
capitalize("codewarriors",[5])        //  'codewArriors'
capitalize("indexinglessons",[0])     //  'Indexinglessons'
