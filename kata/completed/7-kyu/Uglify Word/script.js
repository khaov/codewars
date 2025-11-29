// Solution:

function uglifyWord(s) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let flag = 1;

  function convertCharacter(c) {
    if (alphabet.includes(c) || alphabet.includes(c.toLowerCase())) {
      if (flag === 1) {
        flag = 0;
        return c.toUpperCase();
      } else {
        flag = 1;
        return c.toLowerCase();
      }
    } else {
      flag = 1;
      return c;
    }
  }

  return s.split('').map(character => convertCharacter(character)).join('');
}

// Sample Tests:

uglifyWord("AAA")               // "AaA"
uglifyWord("AaA")               // "AaA"
uglifyWord("BbB")               // "BbB"
uglifyWord("aaa-bbb-ccc")       // "AaA-BbB-CcC"
uglifyWord("AaA-BbB-CcC")       // "AaA-BbB-CcC"
uglifyWord("eeee-ffff-gggg")    // "EeEe-FfFf-GgGg"
uglifyWord("EeEe-FfFf-GgGg")    // "EeEe-FfFf-GgGg"
uglifyWord("qwe123asdf456zxc")  // "QwE123AsDf456ZxC"
uglifyWord("Hello World")       // "HeLlO WoRlD"
