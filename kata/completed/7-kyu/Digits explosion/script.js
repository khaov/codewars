// Solution:

function explode(s) {
  return s.split("").map(digit => digit.repeat(Number(digit))).join("");
}

// Sample Tests:

explode("312")    // "333122"
explode("102269") // "12222666666999999999"
explode("0")      // ""
explode("000")    // ""
explode("123")    // "122333"
