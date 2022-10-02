// Solution:

function binaryToString(binary) {
  let string = '';

  for (let i = 0; i < binary.length; i += 8) {
    string += String.fromCharCode(parseInt(binary.slice(i, i+8), 2));
  }

  return string;
}

// Sample Tests:

binaryToString('01100001') // 'a'
binaryToString('01001011010101000100100001011000010000100101100101000101') // 'KTHXBYE'
binaryToString('00110001001100000011000100110001') // '1011'
binaryToString('001111000011101000101001') // '<:)'
