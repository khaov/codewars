// Solution:

String.prototype.toJadenCase = function () {
  return this.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(' ');
};

// Sample Tests:

var str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase() // "How Can Mirrors Be Real If Our Eyes Aren't Real"
