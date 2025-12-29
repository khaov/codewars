// Solution:

function consonantCount(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const vowels = 'aeiou'.split('');
  const consonants = alphabet.filter(letter => !vowels.includes(letter));

  return str.split('').filter(letter => consonants.includes(letter) || consonants.includes(letter.toLowerCase())).length;
}

// Sample Tests:

consonantCount('')                                                                          // 0
consonantCount('aeiouAEIOU')                                                                // 0
consonantCount('aaa')                                                                       // 0
consonantCount('bcdfghjklmnpqrstvwxyz')                                                     // 21
consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ')                                // 42
consonantCount('y')                                                                         // 1
consonantCount('Y')                                                                         // 1
consonantCount('01234567890_')                                                              // 0
consonantCount(' ^&$#')                                                                     // 0
consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#') // 42
