// Solution:

function twoSum(numbers, target) {
  let result = [];

  numbers.forEach(function(number, index) {
    for(let i = 0; i < numbers.length; i++) {
      if (i !== index) {
        if (number + numbers[i] === target) {
          result.push(index, i);
          break;
        }
      }
    }
  });

  return result.slice(0, 2);
}

// Sample Tests:

twoSum([1,2,3], 4)              //[0,2]
twoSum([1234,5678,9012], 14690) //[1,2]
twoSum([2,2,3], 4)              //[0,1]
