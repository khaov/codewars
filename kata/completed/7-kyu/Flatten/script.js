// Solution:

var flatten = function (array){
  let flattenArray = [];

  array.map(function(item){
    if (typeof item === 'object'){
      item.forEach(function(element){
        flattenArray.push(element);
      })
    } else {
      flattenArray.push(item);
    }
  });

  return flattenArray;
}

// Sample Tests:

flatten([1, 2, 3]) // [1, 2, 3]
flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]) // [1, 2, 3, "a", "b", "c", 1, 2, 3]
flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]) // [3, 4, 5, [9, 9, 9], "a,b,c"]
flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]) // [[3], [4], [5], 9, 9, 8, [1, 2, 3]]
