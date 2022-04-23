// Solution:

function repeatStr (n, s) {
  return s.repeat(n);
}

// Sample Tests:

repeatStr(6, "I")     // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
repeatStr(3, "*")     // "***"
repeatStr(5, "#")     // "#####"
repeatStr(2, "ha ")   // "ha ha "
