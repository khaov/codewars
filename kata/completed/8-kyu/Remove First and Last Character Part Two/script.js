// Solution:

function array(arr) {
  const filteredArr = arr.split(',').filter((character, index) => index !== 0 && index !== arr.split(',').length - 1).join(' ');

  return filteredArr.length > 0 ? filteredArr : null;
}

// Sample Tests:

array('1,2,3')      // '2'
array('1,2,3,4')    // '2 3'
array('1,2,3,4,5')  // '2 3 4'

array('')           // null
array('1')          // null
array('1,2')        // null
