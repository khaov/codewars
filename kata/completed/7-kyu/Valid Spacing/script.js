// Solution:

function validSpacing(s) {
  return s.trim().split(' ').filter(item => item.length > 0).join(' ') === s;
}

// Sample Tests:

validSpacing('Hello world')   // true
validSpacing(' Hello world')  // false
validSpacing('Hello  world ') // false
validSpacing('Hello  world')  // false
validSpacing('Hello')         // true
validSpacing('Helloworld')    // true
