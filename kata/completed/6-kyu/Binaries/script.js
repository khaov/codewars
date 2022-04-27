// Solution:

// Code

function code(strng) {
  return strng.split('').map(function(number){
    let bits = Math.ceil(Math.log2(Number(number) + 1))
    let zeros = bits > 0 ? '0'.repeat(bits - 1) : ''

    return zeros + '1' + Number(number).toString(2)
  }).join('');
}

// Decode

function decode(str) {
    let decodedString = ''
    let remainder = str;

    while (remainder.length !== 0) {
      if (remainder[0] === '0') {
        let index = 0;

        while (remainder[index] !== '1') {
          index++
        }

        let beginIndex = index + 1;
        let endIndex = (index + 1) * 2;

        let binaryNumber = remainder.slice(beginIndex, endIndex);

        decodedString = decodedString + parseInt(binaryNumber, 2);

        remainder = remainder.slice(endIndex, remainder.length);
      } else if (remainder[0] === '1') {
        decodedString = decodedString + parseInt(remainder[1], 2);
        remainder = remainder.slice(2, remainder.length);
      }
    }

    return decodedString;
}

// Sample Tests:

// Code

code("62") // "0011100110"
code("69") // "00111000011001"
code("86") // "00011000001110"

code("33198877334422")
                    // "01110111110001100100011000000110000011110011110111011100110000110001100110"

code("55337700")
              // "001101001101011101110011110011111010"

code("1119441933000055")
                      // "1111110001100100110000110011000110010111011110101010001101001101"

// Decode

decode("0011100110")      // "62"
decode("00111000011001")  // "69"
decode("00011000001110")  // "86"
decode("10001111")        // "07"

decode("01110111110001100100011000000110000011110011110111011100110000110001100110") // "07"
