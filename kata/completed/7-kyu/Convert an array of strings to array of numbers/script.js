// Solution:

function toNumberArray(stringarray) {
  return stringarray.map(string => Number(string));
}

// Sample Tests:

toNumberArray(["1.1","2.2","3.3"]) // [1.1,2.2,3.3]
