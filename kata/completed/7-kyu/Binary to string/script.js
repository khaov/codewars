// Solution:

function binaryToString(binary) {
  return binary.split('0b')
               .map(code => String.fromCharCode(parseInt(code, 2)))
               .slice(1)
               .join('');
}

// Sample Tests:

binaryToString('0b10000110b11000010b1110100') // 'Cat'
binaryToString('0b10010000b11001010b11011000b11011000b11011110b1000000b10101110b11011110b11100100b11011000b11001000b100001') // 'Hello World!'
binaryToString('0b10100110b11001010b11000110b11100100b11001010b11101000b1000000b11011010b11001010b11100110b11100110b11000010b11001110b11001010b1000000b110001') // 'Secret message 1'
