// Solution:

function toAcronym(inp){
  return inp.split(' ').map(word => word[0].toUpperCase()).join('');
}

// Sample Tests:

toAcronym("Code Wars")                    // "CW"
toAcronym("Water Closet")                 // "WC"
toAcronym("Portable Network Graphics")    // "PNG"
toAcronym("PHP: Hypertext Preprocessor")  // "PHP"
toAcronym("hyper text markup language")   // "HTML
