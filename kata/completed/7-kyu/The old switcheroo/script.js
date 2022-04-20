// Solution:

function vowel2index(str) {
  let vowels = ['a','e','i','o','u'];
  return str.split('').map((letter, index) => vowels.includes(letter.toLowerCase()) ? index + 1 : letter).join('');
}

// Sample Tests:

vowel2index('this is my string')                      //  'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') //  'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('Tomorrow is going to be raining')        //  'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng'
vowel2index('')                                       //  ''
