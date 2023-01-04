// Solution:

var filterString = function(value) {
  const numbers = '0123456789'.split('');
  return Number(value.split('').filter(symbol => numbers.includes(symbol)).join(''));
}

// Sample Tests:

filterString("123")         // 123
filterString("a1b2c3")      // 123
filterString("aa1bb2cc3dd") // 123
