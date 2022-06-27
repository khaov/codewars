// Solution:

function problem(x){
  return typeof x === "number" ? x * 50 + 6 : "Error";
}

// Sample Tests:

problem("hello")      // "Error"
problem(1)            // 56
problem(5)            // 256
problem(0)            // 6
problem(1.2)          // 66
problem(3)            // 156
problem("RyanIsCool") // "Error"
problem(-3)           // -144
problem("")           // "Error"
problem(0.03)         // 7.5
