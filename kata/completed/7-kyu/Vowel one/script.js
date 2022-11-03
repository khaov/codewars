// Solution:

function vowelOne(s) {
  const vowels = ["a", "e", "i", "o", "u"]
  return s.split('').map(symbol => vowels.includes(symbol.toLowerCase()) ? 1 : 0).join('');
}

// Sample Tests:

vowelOne( "vowelOne" )  //  "01010101"
vowelOne( "123, arou" ) //  "000001011"
