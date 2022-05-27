// Solution:

function camelize(str) {
  return str.replace(/[^a-z0-9]/gi,' ')
            .split(' ')
            .map(word => word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase())
            .join('');
}

// Sample Tests:

camelize("java script")     // "JavaScript"
camelize("cODE warS")       // "CodeWars"
camelize("example name")    // "ExampleName"
camelize("your-NaMe-here")  // "YourNameHere"
camelize("testing ABC")     // "TestingAbc"
