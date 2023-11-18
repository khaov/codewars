// Solution:

function arr2bin(arr) {
  return arr.every(item => typeof(item) === "number") && arr.length !== 0?
         arr.reduce((sum, num) => sum += num).toString(2) :
         arr.length === 0 ? '0' : false;
}

// Sample Tests:

arr2bin([1,2])            // "11"
arr2bin([1,2,3,4,5])      // "1111"
arr2bin([1,10,100,1000])  // "10001010111"
arr2bin([1,2,'a'])        // false
arr2bin([])               // 0
