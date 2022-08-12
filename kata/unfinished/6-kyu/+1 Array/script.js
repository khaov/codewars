// Solution:

function upArray(arr){
  if (arr.every(num => num >= 0) &&
      !arr.some(num => num.toString().length > 1) &&
      arr.length !== 0) {
        return (Number(arr.join('')) + 1).toString().split('').map(item => Number(item))
  } else {
    return null;
  }
}

// Sample Tests:

upArray([2,3,9])    // [2,4,0]
upArray([4,3,2,5])  // [4,3,2,6]
upArray([1,-9])     // null
