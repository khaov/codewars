// Solution:

function repeats(arr){
  return arr.filter((number, index, array) => index === array.indexOf(number) && index === array.lastIndexOf(number))
            .reduce((sum, number) => sum += number);
};

// Sample Tests:

repeats([4,5,7,5,4,8])                    // 15
repeats([9, 10, 19, 13, 19, 13])          // 19
repeats([16, 0, 11, 4, 8, 16, 0, 11])     // 12
repeats([5, 17, 18, 11, 13, 18, 11, 13])  // 22
repeats([5, 10, 19, 13, 10, 13])          // 24
