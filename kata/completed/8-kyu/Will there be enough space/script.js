// Solution:

function enough(cap, on, wait) {
  let notIncluded = on + wait - cap;
  return notIncluded >=0 ? notIncluded : 0;
}

// Sample Tests:

enough(10, 5, 5)    // 0
enough(100, 60, 50) // 10
enough(20, 5, 5)    // 0
