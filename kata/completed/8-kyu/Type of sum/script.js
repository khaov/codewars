// Solution:

function typeOfSum(a, b) {
  return typeof(a + b);
}

// Sample Tests:

typeOfSum(12, 1)            // 'number'
typeOfSum('d', 1)           // 'string'
typeOfSum(1, 'a')           // 'string'
typeOfSum('dd', '')         // 'string'
typeOfSum(true, 1)          // 'number'
typeOfSum('s', false)       // 'string'
typeOfSum(null, 1)          // 'number'
typeOfSum('s', null)        // 'string'
typeOfSum(null, undefined)  // 'number'
typeOfSum(undefined, 're')  // 'string'
typeOfSum(undefined, true)  // 'number'
typeOfSum(null, false)      // 'number'
