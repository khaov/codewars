// Solution:

function shadesOfGrey(n){
  const symbols = '0123456789abcdef'.split('');

  if(n <= 0) {
    return []
  } else {

    let combinationsArray = []

    symbols.forEach(function(symbol) {
      for (let i = 0; i < symbols.length; i++) {
        combinationsArray.push('#' + `${symbol}${symbols[i]}`.repeat(3))
      }
    })

    const shadesArray = combinationsArray.filter(function(combination) {
      if (combination !== '#000000' && combination !=='#ffffff') {
        return combination
      }
    });

    return shadesArray.slice(0, n)
  }
}

// Sample Tests:

shadesOfGrey(-2) //  []
shadesOfGrey(-1) //  []
shadesOfGrey(0)  //  []
shadesOfGrey(1)  //  ["#010101"]
shadesOfGrey(2)  //  ["#010101", "#020202"]
shadesOfGrey(3)  //  ["#010101","#020202", "#030303"]
shadesOfGrey(4)  //  ["#010101", "#020202", "#030303", "#040404"]
shadesOfGrey(5)  //  ["#010101", "#020202", "#030303", "#040404", "#050505"]
shadesOfGrey(6)  //  ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606"]
shadesOfGrey(7)  //  ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707"]
shadesOfGrey(8)  //  ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707", "#080808"]
shadesOfGrey(9)  //  ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707", "#080808", "#090909"]
shadesOfGrey(10) //  ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707", "#080808", "#090909", "#0a0a0a"]
shadesOfGrey(254)
