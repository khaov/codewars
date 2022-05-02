// Solution:

function pluck(objs, name) {
  return objs.map(obj => obj[name]);
}

// Sample Tests:

pluck([{a:1}, {a:2}], 'a')      // [1,2]
pluck([{a:1, b:3}, {a:2}], 'b') // [3, undefined]