// Solution:

function add(num1, num2) {
  let arr1 = num1.toString().split('').reverse()
  let arr2 = num2.toString().split('').reverse();
  let sum = [];

  if (arr1.length > arr2.length){
    for (let i = 0; i <= arr1.length - arr2.length; i++) {
      arr2.push('0');
    }
  } else if (arr1.length < arr2.length) {
    for (let i = 0; i <= arr2.length - arr1.length; i++) {
      arr1.push('0');
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    sum.push(Number(arr1[i]) + Number(arr2[i]));
  }

  return Number(sum.reverse().join(''));
}

// Sample Tests:

// Real addition:

add(2, 11)        // 13
add(0, 1)         // 1
add(0, 0)         // 0

// Silly addition:

add(16, 18)       // 214
add(26, 39)       // 515
add(12, 8)        // 110
add(122, 81)      // 1103

// Big addition:

add(1222, 30277)  // 31499
add(1236, 30977)  // 31111013
add(38810, 1383)  // 391193
add(49999, 49999) // 818181818