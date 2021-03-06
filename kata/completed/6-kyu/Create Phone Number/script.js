// Solution:

function createPhoneNumber(numbers){
  return numbers.map(function(number, index) {
    switch (index) {
      case 0:   return `(${number}`; break;
      case 2:   return `${number})`; break;
      case 3:   return ` ${number}`; break;
      case 6:   return `-${number}`; break;
      default:  return  number;      break;
    }
  }).join('');
}

// Sample Tests:

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) // "(111) 111-1111"
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"
