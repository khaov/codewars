// Solution:

function contamination(text, char){
  return text !== "" && char !== "" ?
  char.repeat(text.length):
  "";
}

// Sample Tests:

contamination("abc","z")      // "zzz"
contamination("","z")         // ""
contamination("abc","")       // ""
contamination("_3ebzgh4","&") // "&&&&&&&&"
contamination("//case"," ")   // "      "
