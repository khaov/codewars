// Solution:

function insideOut(x){
  return x.split(' ').map(function(word){
    if ( word.length % 2 === 0) {
      return word.slice(0, word.length / 2).split('').reverse().join('') +
             word.slice(word.length / 2 , word.length).split('').reverse().join('');
    } else if ( word.length % 2 !== 0 && word.length > 1){
      return word.slice(0, word.length / 2).split('').reverse().join('') +
             word.slice(word.length / 2, word.length / 2 + 1) +
             word.slice(word.length / 2 + 1, word.length).split('').reverse().join('');
    } else {
      return word;
    }
  }).join(' ');
}

// Sample Tests:

insideOut('man i need a taxi up to ubud')             // 'man i ende a atix up to budu'
insideOut('what time are we climbing up the volcano') // 'hwta item are we milcgnib up the lovcona'
insideOut('take me to semynak')                       // 'atek me to mesykan'
