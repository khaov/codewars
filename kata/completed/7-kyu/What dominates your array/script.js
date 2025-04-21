// Solution:

function dominator(arr) {
  let arrDominator = 0;
  let integersValue = 0;

  const arrHalf = arr.length / 2;

  for (let i = 0; i < arr.length; i++) {
     integersValue = arr.filter(num => num == arr[i]).length;

    if (integersValue > arrHalf) {
      arrDominator = arr[i];
      break;
    } else {
      arrDominator = -1;
    }
  }

  return arrDominator;
}

// Sample Tests:

dominator([3,4,3,2,3,1,3,3])  //  3
dominator([1,2,3,4,5])        // -1
dominator([1,1,1,2,2,2])      // -1
dominator([1,1,1,2,2,2,2])    //  2