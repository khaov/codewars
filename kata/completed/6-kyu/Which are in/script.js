// Solution:

function inArray(array1,array2){
  return array1.filter(firstArrayWord => array2.some(secondArrayWord => secondArrayWord.includes(firstArrayWord))).sort();
}

// Sample Tests:

let a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
let a1 = ["xyz", "live", "strong"]
inArray(a1, a2) // ["live", "strong"]

a1 = ["live", "strong", "arp"]
inArray(a1, a2) // ["arp", "live", "strong"]

a1 = ["tarp", "mice", "bull"]
inArray(a1, a2) // []
