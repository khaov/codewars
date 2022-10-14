// Solution:

reverse = function(array) {
  return array.reduce((reverse, item) => [item].concat(reverse),[]);
}

// Sample Tests:

reverse([1,2,3])            // [3,2,1]
reverse([1,null,14,"two"])  // ["two",14,null,1]
