// Последовательность Фибоначчи — это порядок чисел,
// где каждое последующее число является суммой двух предыдущих

// Solution:

function productFib(prod) {

  let a = 0;
  let b = 1;
  let temp

  while (prod > a * b) {
    temp = b;
    b = a + b;
    a = temp;
    if (prod === a * b) {
      return [a, b, true]
    } else if (prod < a * b) {
      return [a, b, false]
    }
  }

}

// Sample Tests:

productFib(4895)      // [55, 89, true]
//productFib(5895)      // [89, 144, false]
//productFib(74049690)  // [6765, 10946, true]
// productFib(84049690)  // [10946, 17711, false]
// productFib(193864606) // [10946, 17711, true]
// productFib(447577)    // [610, 987, false]
// productFib(602070)    // [610, 987, true]
