// Solution:

// Square:

Array.prototype.square = function () {
  return this.map(number => Math.pow(number, 2));
}

// Cube:

Array.prototype.cube = function () {
  return this.map(number => Math.pow(number, 3));
}

// Average:

Array.prototype.average = function () {
  return this.length === 0 ? NaN : this.reduce((sum, num) => sum += num) / this.length;
}

// Sum:

Array.prototype.sum = function () {
  return this.length === 0 ? NaN : this.reduce((sum, num) => sum += num);
}

// Even:

Array.prototype.even = function () {
  return this.filter(number =>  number % 2 === 0);
}

// Odd:

Array.prototype.odd = function () {
  return this.filter(number =>  number % 2 === 1);
}

// Sample Tests:

var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]
