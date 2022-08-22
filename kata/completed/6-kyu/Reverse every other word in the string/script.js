// Solution:

function reverse(str){
  if (str != false) {
    return str.split(' ')
              .map((word, index) => index % 2 !== 0 ? word.split('').reverse().join('') : word)
              .join(' ');
  } else {
    return '';
  }
}

// Sample Tests:

reverse("")                                       // ""
reverse("Reverse this string, please!")           // "Reverse siht string, !esaelp"
reverse("I really don't like reversing strings!") // "I yllaer don't ekil reversing !sgnirts"
