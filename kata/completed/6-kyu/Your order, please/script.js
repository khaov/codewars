// Solution:

function order(words){
  return words.split(' ').sort((prev, next) => parseInt(prev.match(/\d+/)) - parseInt(next.match(/\d+/))).join(' ')
}

// Sample Tests:

order("is2 Thi1s T4est 3a")               // "Thi1s is2 3a T4est"
order("4of Fo1r pe6ople g3ood th5e the2") // "Fo1r the2 g3ood 4of th5e pe6ople"
order("")                                 // "", "empty input should return empty string" 