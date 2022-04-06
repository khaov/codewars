// Solution:

function doubleChar(str) {
  let doubleStr = "";
  for (let i = 0; i <= str.length-1; i++ ) {
    doubleStr += str[i].repeat(2)
  }
  return doubleStr;
}

// Sample Tests:

doubleChar("abcd")        // "aabbccdd"
doubleChar("Adidas")      // "AAddiiddaass"
doubleChar("1337")        // "11333377"
doubleChar("illuminati")  // "iilllluummiinnaattii"
doubleChar("123456")      // "112233445566"
doubleChar("%^&*(")       // "%%^^&&**(("
doubleChar("String")      // "SSttrriinngg"
doubleChar("Hello World") // "HHeelllloo  WWoorrlldd"
doubleChar("1234!_ ")     // "11223344!!__  "
