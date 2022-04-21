// Solution:

function trackSum(arr) {

  let sumTracking = [];
  let trackingArray = arr;

  while(sumTracking.length !== 4) {
    let arraySum = trackingArray.reduce((sum, num) => sum += num, 0);
    sumTracking.push(arraySum);

    if (sumTracking.length !== 4) {
      let filterdArray = trackingArray.filter((num, index, array) => index === array.indexOf(num));

      if (filterdArray.join('') !== trackingArray.join('') || filterdArray.length === 1) {
        trackingArray = filterdArray;
      } else {
        let sortedArray = filterdArray.sort(function(prev, next){
          return next - prev;
        });
        trackingArray = sortedArray.map(function(num, index, array){
          return num -= array[index + 1]
        }).slice(0, sortedArray.length - 1);
      }
    }
  }

  return [sumTracking, trackingArray];

}

// Sample Tests:

// Case 1
var arr1 = [5, 3, 6, 10, 5, 2, 2, 1];
trackSum(arr1) // [[34, 27, 9, 7] [4, 1, 2]]

// // Case 2
var arr2 = [-3, -5, 8, -11, 22, 16, -11, 22, -8, 8];
trackSum(arr2) //[[38, 19, 33, 30] [6, 8, 11, 2, 3]]

// Case 3
var arr3 = [2, 3, 4, 1, 3, 2, -5, 4, 2, 3, 1, -5];
trackSum(arr3) // [[15, 5, 9, 7] [1, 6]]

// Case 4
var arr4 = [4, 4, 4, 4, 4, 4, 4, 1];
trackSum(arr4) // [[29, 5, 3, 3] [3]]
