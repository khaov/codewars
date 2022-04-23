// Solution:

function solution(str){
  return str.split('').reverse().join('')
}

// Sample Tests:

solution('world') // 'dlrow'
solution('hello') // 'olleh'
solution('')      // ''
solution('h')     // 'h'
