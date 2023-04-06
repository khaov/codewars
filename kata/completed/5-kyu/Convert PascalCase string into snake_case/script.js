// Solution:

function toUnderscore(string) {
  const numbers = '0123456789'.split('');

  return string.toString().split('').map(function(symbol, index){
    if (symbol === symbol.toUpperCase() && !numbers.includes(symbol)) {
      return index === 0 ? symbol.toLowerCase() : `_${symbol.toLowerCase()}`
    } else {
      return symbol;
    }
  }).join('');
}

// Sample Tests:

toUnderscore("TestController")  // "test_controller"
toUnderscore("MoviesAndBooks")  // "movies_and_books"
toUnderscore("App7Test")        // "app7_test"
toUnderscore(1)                 // "1"
