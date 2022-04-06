// Solution:

function sortGiftCode(code){
  return code.split('').sort().join('');
}

// Sample Tests:

sortGiftCode('abcdef')                      // 'abcdef'
sortGiftCode('pqksuvy')                     // 'kpqsuvy'
sortGiftCode('zyxwvutsrqponmlkjihgfedcba')  // 'abcdefghijklmnopqrstuvwxyz'
