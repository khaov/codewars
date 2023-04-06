// Solution:

function hello(name) {
  return name ? `Hello, ${name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()}!` : "Hello, World!"
}

// Sample Tests:

hello('john')   // "Hello, John!"
hello('aliCE')  // "Hello, Alice!"
hello()         // "Hello, World!"
hello('')       // "Hello, World!"
