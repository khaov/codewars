// Solution:

function tripledouble(num1, num2) {
  let result = 0;
  let numArray = num1.toString().split('');

  for (let i = 0; i < numArray.length; i++) {
     if (numArray[i] === numArray[i + 1] && numArray[i] === numArray[i + 2]) {
      let double = [];
      double.push(numArray[i], numArray[i+1]);
      if (num2.toString().includes(double.join(''))){
        result = 1;
        break;
      }
     }
  }

  return result;
}

// Sample Tests:

tripledouble(451999277,41177722899) // 1
tripledouble(1222345, 12345)        // 0
tripledouble(12345, 12345)          // 0
tripledouble(666789, 12345667)      // 1
tripledouble(10560002, 100)         // 1
tripledouble(1112, 122)             // 0
