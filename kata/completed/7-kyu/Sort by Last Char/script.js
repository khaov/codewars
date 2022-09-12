// Solution:

function last(x){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return x.split(' ').sort((prev, next) => alphabet.indexOf(prev[prev.length-1]) - alphabet.indexOf(next[next.length-1]));
}

// Sample Tests:

last('man i need a taxi up to ubud')              // ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
last('what time are we climbing up the volcano')  // ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
last('take me to semynak')                        // ['take', 'me', 'semynak', 'to']
