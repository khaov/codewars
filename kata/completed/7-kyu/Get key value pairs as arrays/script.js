// Solution:

function keysAndValues(data){
  return [Object.keys(data),Object.values(data)]
}

// Sample Tests:

keysAndValues({a: 1, b: 2, c: 3})       // [['a', 'b', 'c'], [1, 2, 3]]
keysAndValues({})                       // [[], []]
keysAndValues({1: 'a', 2: 'b', 3: 'c'}) // [['1', '2', '3'], ['a', 'b', 'c']]
