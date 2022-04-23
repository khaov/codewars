// Solution:

function add(n){
  const fn = function(x){ return add(n+x); }
  fn.toString = function(){ return n; }
  return fn;
}

// Sample Tests:

add(1)        //  1
add(1)(2)     //  3
add(1)(2)(3)  //  6
