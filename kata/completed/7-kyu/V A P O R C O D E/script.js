// Solution:

function vaporcode(string) {
  return string.split(' ')
               .map(word => word.split('').map(letter => letter.toUpperCase()).join('  '))
               .join('  ')
               .trim();
}

// Sample Tests:

vaporcode("Lets go to the movies")    //  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
vaporcode("Why isnt my code working") //  "W  H  Y  I  S  N  T  M  Y  C  O  D  E  W  O  R  K  I  N  G"
