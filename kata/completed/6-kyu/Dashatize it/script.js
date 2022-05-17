// Solution:

function dashatize(num) {
  const sourceArray = Math.abs(num).toString().split('');

  if (sourceArray.length > 1) {
    return sourceArray.map(function(item, index, array) {
      if(item % 2 === 1) {
        if (index === 0) {
          return item = `${item}-`
        } else if (index === array.length - 1) {
          return item = `-${item}`
        } else {
          return item = `-${item}-`
        }
      } else {
        return item
      }
    }).join('').replace(/--/g, '-');
  } else {
    return sourceArray.join('')
  }
}

// Sample Tests:

dashatize(274)    // "2-7-4", "Should return 2-7-4"
dashatize(5311)   // "5-3-1-1", "Should return 5-3-1-1"
dashatize(86320)  // "86-3-20", "Should return 86-3-20"
dashatize(974302) // "9-7-4-3-02", "Should return 9-7-4-3-02"

dashatize(NaN)    // "NaN", "Should return NaN"
dashatize(0)      // "0", "Should return 0"
dashatize(-1)     // "1", "Should return 1"
dashatize(-28369) // "28-3-6-9", "Should return 28-3-6-9"
