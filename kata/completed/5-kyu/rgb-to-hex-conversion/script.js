// Solution:

function rgb(r, g, b){

  let rgbArray = [];

  rgbArray.push(r)
  rgbArray.push(g);
  rgbArray.push(b);

  function hex(value) {
    const hexValue = value.toString(16);
    return hexValue.length === 1 ?  '0' + hexValue : hexValue
  }

  return rgbArray.map(function(item) {
    let convertedValue = item;

    if (item < 0) {
      convertedValue = 0;
      return hex(convertedValue)
    } else if (item > 255) {
      convertedValue = 255;
      return hex(convertedValue)
    } else {
      return hex(convertedValue)
    }
  }).join('').toUpperCase();
}

// Sample Tests:

rgb(0, 0, 0)      // '000000'
rgb(0, 0, -20)    // '000000'
rgb(300,255,255)  // 'FFFFFF'
rgb(173,255,47)   // 'ADFF2F'
rgb(5,228,213)    // '05E4D5'
