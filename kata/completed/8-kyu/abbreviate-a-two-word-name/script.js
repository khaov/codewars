// Solution:

function abbrevName(name){
  return name.split(' ').map(function(word) {
    return word[0].toUpperCase();
  }).join('.');
}

// Sample Tests:

abbrevName("Sam Harris") // "S.H"
abbrevName("Patrick Feenan") // "P.F"
abbrevName("Evan Cole") // "E.C"
abbrevName("P Favuzzi") // "P.F"
abbrevName("David Mendieta") // "D.M"
