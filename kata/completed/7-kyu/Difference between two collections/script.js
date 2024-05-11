// Solution:

function diff(a, b){
  const aDifference = a.filter(character => !b.includes(character));
  const bDifference = b.filter(character => !a.includes(character));

  return aDifference.concat(bDifference)
             .filter((character, index, array) =>
                index === array.lastIndexOf(character))
             .sort();
}

// Sample Tests:

// should return empty for the same content
diff(["a","b"], ["a","b"]) // []

// should return A if B is empty
a = ["a","b"];
b = [];
diff(a, b) // ["a","b"]

// should return B if A is empty
a = [];
b = ["a","b"];
diff(a, b) // ["a","b"]

// should return empty for the empty content
diff([], []) // []

// should return the last character
a = ["a","b","z"];
b = ["a","b"];
diff(a, b) // ["z"]

// should return the sorted characteres
a = ["a","b","z","d","e","d"];
b = ["a","b", "j","j"];
diff(a, b) // ["d","e","j","z"]
