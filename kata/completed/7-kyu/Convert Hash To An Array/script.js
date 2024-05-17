// Solution:

function convertHashToArray(hash){
  let array = [];

  for (key in hash) {
    array.push([key, hash[key]]);
  }

  return array.sort();
}

// Sample Tests:

convertHashToArray({name: "Jeremy"})                                      // [["name", "Jeremy"]]
convertHashToArray({name: "Jeremy", age: 24})                             // [["age", 24], ["name", "Jeremy"]]
convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"})  // [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
convertHashToArray({product: "CodeWars", powerLevelOver: 9000})           // [["powerLevelOver", 9000], ["product", "CodeWars"]]
convertHashToArray({})                                                    // []
