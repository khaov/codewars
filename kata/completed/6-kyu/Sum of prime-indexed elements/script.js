// Solution:

function total(arr){

  // Prime number function

  function prime(n) {
    let result = true;
    if (n === 0 || n === 1) {
        result = false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                result = false;
                break;
            }
        }
    }
    return result;
  }

  return arr.filter((number, index) => prime(index))
            .reduce((sum, number) => sum += number, 0);
};

// Sample Tests:

total([]) // 0
total([1,2,3,4]) // 7
total([1,2,3,4,5,6]) // 13
total([1,2,3,4,5,6,7,8]) // 21
total([1,2,3,4,5,6,7,8,9,10,11]) // 21
total([1,2,3,4,5,6,7,8,9,10,11,12,13]) // 33
total([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]) // 47
