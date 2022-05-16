// Solution:

function wordsToMarks(string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return string.split('').reduce((result, letter) => result += alphabet.indexOf(letter) + 1, 0);
}

// Sample Tests:

wordsToMarks("attitude")  //  100
wordsToMarks("friends")   //  75
wordsToMarks("family")    //  66
wordsToMarks("selfness")  //  99
wordsToMarks("knowledge") //  96
