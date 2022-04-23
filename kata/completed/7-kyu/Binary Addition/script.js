// Solution:

function addBinary(a,b) {
  let decimalNumber = a + b;
  let dividendReminder = 0;
  let binaryNumber = '';
  while (decimalNumber >= 1){
    binaryNumber += Math.floor(dividendReminder = decimalNumber % 2);
    Math.floor(decimalNumber /= 2);
  }
  return binaryNumber.split('').reverse().join('');
}

// Canonical solution:

function conversionToBinary(a,b) {
  return (a+b).toString(2); // двоичное представление
}

// Sample Tests:

//addBinary(1,1); // 1 + 1 = 2 = 10 
//addBinary(1,2); // 1 + 2 = 3 = 11 
//addBinary(5,9); // 5 + 9 = 14 = 1110