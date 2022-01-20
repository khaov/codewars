// Solution:

var number=function(array){
  return array.map(function(item, index){
    return `${index+1}: ${item}`
  });
}

// Sample Tests:

number([])              // []
number(["a", "b", "c"]) // ["1: a", "2: b", "3: c"]
