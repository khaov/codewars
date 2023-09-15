// Solution:

var splitInParts = function(s, partLength){
  let parts = [];

  for (let i = 0; i < s.length; i += partLength) {
    parts.push(s.slice(i, i + partLength));
  }

  return parts.join(" ");
}

// Sample Tests:

splitInParts("supercalifragilisticexpialidocious", 3) // "sup erc ali fra gil ist ice xpi ali doc iou s"`
splitInParts("HelloKata", 1)                          // "H e l l o K a t a"
splitInParts("HelloKata", 9)                          // "HelloKata"
