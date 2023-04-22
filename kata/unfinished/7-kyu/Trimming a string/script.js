// Solution:

function trim(str, size) {
  return str.length <= size ? str : str.slice(0, str.length > 3 ? size - 3 : size) + "...";
}

// Sample Tests:

trim("Creating kata is fun", 14) // "Creating ka..."
trim("He", 1) // "H..."
trim("Code Wars is pretty rad", 50) // "Code Wars is pretty rad

trim("PWbdW AyT", 2)
