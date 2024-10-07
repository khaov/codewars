// Solution:

function last() {
  if (arguments.length === 1) {
    const argument = arguments[0];

    switch (true) {
      case typeof argument === 'number':
        return argument;
        break;
      case typeof argument === 'string':
        return argument.split('')[argument.length - 1];
        break;
      case typeof argument === 'object':
        return argument[argument.length - 1];
        break;
    }
  } else {
    return arguments[arguments.length-1]
  }
}

// Sample Tests:

last(5)                 // 5
last("123")             // "3"
last([1, 2, 3])         // 3
last([1])               // 1
last([1, 2, 3, [4, 5]]) // [4, 5]
last(1, 2, 3)           // 3
last('a', 'b', 'c')     // 'c'
last([1], [2], [3])     // [3]
last(1, 2, 3, [4, 5])   // [4, 5]
