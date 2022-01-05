// Solution:

// Should return a string representing the ranges
function toRange(arr) {

  function rangeOfArray(processedArray) {

    for (let i = 0; i < processedArray.length - 1; i++) {
      if (Math.abs(processedArray[i] - processedArray[i+1]) !== 1) {
        nonConsecutiveIndex = i + 1;
      }
    }

    if (processedArray.length === 1) {
      rangedArray.push(processedArray);
    } else if (nonConsecutiveIndex > 0) {
      slicedPart = processedArray.slice(nonConsecutiveIndex);
      rangedPart = processedArray.slice(0, nonConsecutiveIndex);
      rangedArray.push(`${rangedPart[0]}_${rangedPart[rangedPart.length-1]}`);
    } else {
      rangedArray.push(`${processedArray[0]}_${processedArray[processedArray.length-1]}`);
    }

    if (slicedPart.length > 0) {
      return rangeOfArray(slicedPart);
    } else {
      return rangedArray.join(',');
    }
  }

  let rangedArray = [];

  const sortedArray = arr;

  return rangeOfArray(sortedArray);

}

// Should return an array
function toArray(str) {

}

// Sample Tests:

//toRange([6])    // '6'

//toRange([5,6,7,8,9])    // '5_9'

toRange([5,6,8,9])      // '5_6,8_9'

//toRange([3,4,5,6,9])  // '3_6,9'
//toArray('3_6,9')      // [3,4,5,6,9]


