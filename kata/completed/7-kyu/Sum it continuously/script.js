// Solution:

function add(arr) {
  let cerrentSum = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   arr[i] += cerrentSum;
  //   cerrentSum = arr[i];
  // }

  // return arr;

  return arr.map(number => cerrentSum += number);
}

// Sample Tests:


  add([0])            // [0]
  add([-33])          // [-33]
  add([32, -9, 2, 0]) // [32, 23, 25, 25]

  add([1, 2, 3, 4, 5])      // [1, 3, 6, 10, 15]
  add([2, 4, 6, 8, 10])     // [2, 6, 12, 20, 30]
  add([1, 8, 27, 64, 125])  // [1, 9, 36, 100, 225]

  add([9, 18, 27, 36, 45, 54])          // [9, 27, 54, 90, 135, 189]
  add([6, 12, 18, 24, 30, 36, 42])     // [6, 18, 36, 60, 90, 126, 168]
  add([8, 16, 24, 32, 40, 48, 56, 64]) // [8, 24, 48, 80, 120, 168, 224, 288]

