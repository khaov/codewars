// Solution:

function compare(s1, s2) {
  const alpha = Array.from(Array(26)).map((_, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  function transformString(string) {
    if (string === null || string === "") {
      return ""
    } else if (string.split('').every(character => alphabet.includes(character.toUpperCase()))) {
      return string.split('').map(character => character.toUpperCase().charCodeAt(0))
                             .reduce((sum, num) => sum += num, 0)
    } else {
      return ""
    }
  }

  return transformString(s1) === transformString(s2);
}

// Sample Tests:

compare("AD", "BC");      // true
compare("AD", "DD");      // false
compare("gf", "FG");      // true
compare("Ad", "DD");      // false
compare("zz1", "");       // true
compare("ZzZz", "ffPFF"); // true
compare("kl", "lz");      // false
compare("!!", "7476");    // true
compare("##", "1176");    // true

compare(null, "BC");      // false
compare(null, null);      // true
compare(null, "");        // true
compare("", "");          // true