// Solution:

function replace(s){
  const vowels = 'aeiouAEIOU'.split('');
  return s.split('')
          .map(character => vowels.includes(character) ? '!' : character)
          .join('');
}

// Sample Tests:

replace("Hi!")      // "H!!"
replace("!Hi! Hi!") // "!H!! H!!"
replace("aeiou")    // "!!!!!"
replace("ABCDE")    // "!BCD!"
