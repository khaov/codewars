// Solution:

function squareDigits(num){
  const squareArray = num.toString().split('').map(function(number){
    return number *= number;
  }).join('');
  return Number(squareArray);
}

// Sample Tests:

squareDigits(3212); // 9414