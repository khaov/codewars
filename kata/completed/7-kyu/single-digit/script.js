// Solution:

function singleDigit(n) {

  if (n < 10) {
    return n
  } else {
    let result = n;

    result = result.toString(2).split('').reduce(function(sum, num){
      return sum = sum + Number(num);
    }, 0);

    if (result >= 10) {
      return singleDigit(result)
    } else {
      return result
    }

  }
}

// Sample Tests:

singleDigit(5)          // 5
singleDigit(999)        // 8
singleDigit(1234444123) // 1
singleDigit(443566)     // 2
singleDigit(565656565)  // 3
singleDigit(4868872)    // 8
singleDigit(234234235)  // 2
singleDigit(567448)     // 7
singleDigit(1000000000) // 3
