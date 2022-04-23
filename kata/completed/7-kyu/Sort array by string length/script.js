// Solution:

function sortByLength (array) {
  return array.sort((a, b) => a.length - b.length)
};

// Sample Tests:


sortByLength(["Beg", "Life", "I", "To"])            // ["I", "To", "Beg", "Life"]
sortByLength(["", "Moderately", "Brains", "Pizza"]) // ["", "Pizza", "Brains", "Moderately"]
sortByLength(["Longer", "Longest", "Short"])        // ["Short", "Longer", "Longest"]

