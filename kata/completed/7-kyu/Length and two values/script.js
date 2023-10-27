// Solution:

function alternate(n, firstValue, secondValue){
  let arr = [];

  for(let i = 0; i < n; i++ ) {
    arr.push(firstValue);
    arr.push(secondValue);
  }

  return arr.splice(0, n);
}

// Sample Tests:

alternate(5, true, false)         // [true, false, true, false, true]
alternate(20, 'blue', 'red')      // ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red']
alternate(0, "lemons", "apples")  // []
