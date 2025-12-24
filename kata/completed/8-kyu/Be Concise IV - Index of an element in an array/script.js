// Solution:

function find(a, e) {
 return a.includes(e) ? a.indexOf(e) : 'Not found';
}

// Sample Tests:

let array = [2,3,5,7,11];

find(array, 5)              // 2
find(array, 11)             // 4
find(array, 3)              // 1
find(array, 2)              // 0
find(array, 7)              // 3
find(array, 1)              // "Not found"
find(array, 8)              // "Not found"

array = [true, "Hello World", false, "Lorem Ipsum", 6, Math.PI];

find(array, "Hello World")  // 1
find(array, "lorem ipsum")  // "Not found"
find(array, "Lorem Ipsum")  // 3
find(array, false)          // 2
find(array, true)           // 0
find(array, Math.PI)        // 5
find(array, 3.14)           // "Not found"
find(array, 6)              // 4
