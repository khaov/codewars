// Solution:

function isIsogram(str){

  // Можно, в самом начале, привести всю строку в нижний регистр:
  // str.toLowerCase();

  const lowerCaseArray = str.split('').map(function(item) {
    return item.toLowerCase();
  });

  return lowerCaseArray.every(function(item, index, array) {
    return array.lastIndexOf(item) === index;
  });
}

// Sample Tests:

isIsogram("Dermatoglyphics") // true
isIsogram("isogram") // true
isIsogram("aba") // false, "same chars may not be adjacent"
isIsogram("moOse") // false, "same chars may not be same case"
isIsogram("isIsogram") // false
isIsogram("") // true, "an empty string is a valid isogram"

