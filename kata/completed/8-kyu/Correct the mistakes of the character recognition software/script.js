// Solution:

function correct(string) {
  const replacement = {
    5: "S",
    0: "O",
    1: "I"
  };

  return string.split('')
               .map(symbol => symbol in replacement ? replacement[symbol] : symbol)
               .join('');
}

// Sample Tests:

correct("L0ND0N")     // "LONDON"
correct("DUBL1N")     // "DUBLIN"
correct("51NGAP0RE")  // "SINGAPORE"
correct("BUDAPE5T")   // "BUDAPEST"
correct("PAR15")      // "PARIS"
