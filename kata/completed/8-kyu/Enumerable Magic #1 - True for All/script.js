// Solution:

function all( arr, fun ){
  return arr.every(fun);
}

// Sample Tests:

all([1,2,3,4,5], function(v){return v<9}) // true
all([1,2,3,4,5], function(v){return v>9}) // false
