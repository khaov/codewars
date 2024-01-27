// Solution:

function catMouse(x) {
  return x.split('').filter(symbol => symbol === ".").length > 3 ?
         "Escaped!" : "Caught!";
}

// Sample Tests:

catMouse('C....m')  // "Escaped!"
catMouse('C..m')    // "Caught!"
catMouse('C.....m') // "Escaped!"
