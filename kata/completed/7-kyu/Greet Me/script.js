// Solution:

var greet = function(name) {
  return 'Hello' + ` ${name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()}!`
};

// Sample Tests:

greet('riley')  // 'Hello Riley!'
greet('JACK')   // 'Hello Jack!'
