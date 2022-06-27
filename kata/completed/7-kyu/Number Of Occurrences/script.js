// Solution:

Array.prototype.numberOfOccurrences = function(number) {
  return this.filter(element => element === number).length;
}

// Sample Tests:

var arr = [0, 1, 2, 2, 3];

arr.numberOfOccurrences(0)    // 1;
arr.numberOfOccurrences(4)    // 0;
arr.numberOfOccurrences(2)    // 2;
arr.numberOfOccurrences("a")  // 0;
