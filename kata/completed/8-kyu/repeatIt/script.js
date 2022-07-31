// Solution:

var repeatIt = function(str, n) {
  return typeof str === 'string' ? str.repeat(n) : "Not a string";
}

// Sample Tests:

repeatIt("*",3)       // "***"
repeatIt("Hello",11)  // "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello"
