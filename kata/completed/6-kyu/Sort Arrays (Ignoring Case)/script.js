// Solution:

sortme = function( names ){
  return names.sort((prev, next) => prev.toLowerCase().localeCompare(next.toLowerCase()));
}

// Sample Tests:

sortme(["Hello","there","I'm","fine"])  // ["fine", "Hello", "I'm", "there"]
sortme(["C", "d", "a", "B"])            // ["a", "B", "C", "d"]
sortme(["CodeWars"])                    // ["CodeWars"]
sortme([])                              // []
