// Solution:

function narcissistic(value) {

  valueDigits = value.toString().split('');
  valueLength = valueDigits.length;

  let number = valueDigits.reduce(function(sum, digit){
    return sum = sum + Math.pow(Number(digit), valueLength)
  }, 0);

  return value === number;

}

// Sample Tests:

narcissistic( 7 )     // true
narcissistic( 153 )   // true
narcissistic( 371 )   // true
narcissistic( 1652 )  // false
