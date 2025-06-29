// Solution:

function evenChars(string) {
  return string.length >= 2 && string.length <= 100 ?
         string.split('').filter((_, index) => (index + 1)  % 2 === 0) :
         "invalid string";
}

// Sample Tests:

evenChars("1234");          // ["2", "4"]
evenChars(";;;--");         // [";", "-"]
evenChars("abcdefghijklm"); // ["b", "d", "f", "h", "j", "l"]

evenChars("aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwuvghwuvfhgw.vjhwncv.wecnaw.ecnvw.kejvhnw.evjkhweqv.kjhwqeev.kjbhdjk.vbaewkjva");  // "invalid string"
evenChars("a"); // "invalid string"
evenChars("");  // "invalid string"