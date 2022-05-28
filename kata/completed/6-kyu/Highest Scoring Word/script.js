// Solution:

function high(x){
  let scores = [];

  x.split(' ').forEach(function(word, index){
    let wordScore = word.split('').reduce((score, letter) => score += `${letter}`.charCodeAt(0) - 96, 0);
    scores.push([wordScore, index]);
  });

  const sortedScores = scores.sort((prev, next) => next[0] - prev[0])

  return x.split(' ')[sortedScores[0][1]];
}

// Sample Tests:

high('man i need a taxi up to ubud')             // 'taxi'
high('what time are we climbing up the volcano') // 'volcano'
high('take me to semynak')                       // 'semynak'
high('aa b')                                     // 'aa'
high('b aa')                                     // 'b'
high('bb d')                                     // 'bb'
high('d bb')                                     // 'd'
high('aaa b')                                    // 'aaa'
