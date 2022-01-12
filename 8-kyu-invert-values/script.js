// Solution:

function invert(array) {
  return array.map(value => (value < 0) ? Math.abs(value) : -Math.abs(value));
}

// Sample Tests:

invert([1,2,3,4,5])   // [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) // [-1,2,-3,4,-5]
invert([])            // []
invert([0])           // [-0]