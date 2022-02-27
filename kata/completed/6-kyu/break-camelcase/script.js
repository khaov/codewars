// Solution:

function solution(string) {
  return string.split('').map(function(letter){
    if (letter !== letter.toLowerCase()){
      return ` ${letter}`
    } else {
      return letter
    }
  }).join('');
}

// Sample Tests:

solution('camelCasing')     // 'camel Casing'
solution('camelCasingTest') // 'camel Casing Test'
