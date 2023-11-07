// Solution:

function createDict(keys, values){
  let dict = {}

  for (let i = 0; i < keys.length; i++) {
    dict[`${keys[i]}`] = values[i] != undefined ? values[i] : null;
  }

  return dict;
}

// Sample Tests:

createDict(['a', 'b', 'c'], [1, 2, 3])      // {'a': 1, 'b': 2, 'c': 3}
createDict(['a', 'b', 'c'], [1, 2, 3, 4])   // {'a': 1, 'b': 2, 'c': 3}
createDict(['a', 'b', 'c','d'], [1, 2, 3])  // {'a': 1, 'b': 2, 'c': 3, 'd':null}
