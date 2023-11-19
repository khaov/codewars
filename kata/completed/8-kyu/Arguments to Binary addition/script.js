// Solution:

function arr2bin(arr){
  return arr.length !== 0 ?
         arr.map(item => typeof(item) === 'number' ? item: 0)
            .reduce((sum, num) => sum += num).toString(2) : '0';
}

// Sample Tests:

arr2bin([1,2,3,4,5])          // "1111"
arr2bin([1,10,100,1000])      // "10001010111"
arr2bin([])                   // "0"
arr2bin([null])               // "0"
arr2bin([true,true,false,15]) //"1111"
