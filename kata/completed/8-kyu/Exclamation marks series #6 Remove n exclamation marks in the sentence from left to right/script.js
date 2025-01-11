// Solution:

function remove(s,n){
  let counter = 0;

  return s.split('').map(function(character) {
    if (character === '!' && counter !== n) {
      counter++;
      return '';
    } else {
      return character;
    }
  }).join('');
}

// Sample Tests:

remove("Hi!",1)                 // "Hi"
remove("Hi!",100)               // "Hi"
remove("Hi!!!",1)               // "Hi!!"
remove("Hi!!!",100)             // "Hi"
remove("!Hi",1)                 // "Hi"
remove("!Hi!",1)                // "Hi!"
remove("!Hi!",100)              // "Hi"
remove("!!!Hi !!hi!!! !hi",1)   // "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3)   // "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5)   // "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) // "Hi hi hi"
