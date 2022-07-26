// Solution:

// Encrypt:

function encrypt(text, n) {
  if (!text || n <= 0) {
    return text;
  }

  let encryptedText = text;

  for (let i = 1; i <= n; i++) {
    let oddPart = [];
    let evenPart = [];

    encryptedText.split('').forEach((item, index) => index % 2 === 1 ? oddPart.push(item) : evenPart.push(item));
    encryptedText = oddPart.join('') + evenPart.join('');
  }

  return encryptedText;
}

// Decrypt:

function decrypt(encryptedText, n) {

  if (!encryptedText || n <= 0) {
    return encryptedText;
  }

  let decryptedText = encryptedText;

  for (let i = 1; i <= n; i++) {
    let  decryption = [];

    let middle = decryptedText.length / 2;

    let oddPart = decryptedText.split('').slice(0, middle);
    let evenPart = decryptedText.split('').slice(middle);

    for (let i = 0; i < decryptedText.length; i++) {
      if (i % 2 === i - 1) {
        decryption.push(oddPart[i]);
        decryption.push(evenPart[i]);
      } else {
        decryption.push(evenPart[i]);
        decryption.push(oddPart[i]);
      }
    }

    decryptedText = decryption.join('');
  }

  return decryptedText;
}

// Sample Tests:

encrypt("This is a test!", 0)                 // "This is a test!"
encrypt("This is a test!", 1)                 // "hsi  etTi sats!"
encrypt("This is a test!", 2)                 // "s eT ashi tist!"
encrypt("This is a test!", 3)                 // " Tah itse sits!"
encrypt("This is a test!", 4)                 // "This is a test!"
encrypt("This is a test!", -1)                // "This is a test!"
encrypt("This kata is very interesting!", 1)  // "hskt svr neetn!Ti aai eyitrsig"

decrypt("This is a test!", 0)                 // "This is a test!"
decrypt("hsi  etTi sats!", 1)                 // "This is a test!"
decrypt("s eT ashi tist!", 2)                 // "This is a test!"
decrypt(" Tah itse sits!", 3)                 // "This is a test!"
decrypt("This is a test!", 4)                 // "This is a test!"
decrypt("This is a test!", -1)                // "This is a test!"
decrypt("hskt svr neetn!Ti aai eyitrsig", 1)  // "This kata is very interesting!"

encrypt("", 0)                                // ""
decrypt("", 0)                                // ""
encrypt(null, 0)                              // null
decrypt(null, 0)                              // null
