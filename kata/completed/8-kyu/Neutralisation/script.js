// Solution:

function neutralise(s1, s2) {
  const compare = {
    '++': '+',
    '--': '-',
    '+-': '0',
    '-+': '0'
  }

  let interaction= [];

  for (i = 0; i < s1.length; i++) {
    interaction.push(`${s1[i]}${s2[i]}`);
  }

  return interaction.map(pair => compare[pair]).join('');
}

// Sample Tests:

neutralise("--++--", "++--++")          // "000000"
neutralise("-+-+-+", "-+-+-+")          // "-+-+-+"
neutralise("-++-", "-+-+")              // "-+00"
neutralise("--++", "++++")              // "00++"
neutralise("+++--+---", "++----++-")    // "++0--000-"
neutralise("-----", "-----")            // "-----"
neutralise("-+", "++")                  // "0+"
neutralise("--", "-+")                  // "-0"
neutralise("-++", "+--")                // "000"
neutralise("++-++--++-", "-+++-++-++")  // "0+0+0000+0"
neutralise("-++-+-++-", "+-++++---")    // "00+0+000-"
neutralise("---++-+--", "-+++--++-")    // "-00+0-+0-"
neutralise("+-----+++-", "--+-+-++--")  // "0-0-0-++0-"
neutralise("+-----+-", "---++-++")      // "0--00-+0"
neutralise("-+--+-+---", "-+--+-+-+-")  // "-+--+-+-0-"
neutralise("+-+", "-++")                // "00+"
neutralise("-++", "-+-")                // "-+0"
neutralise("---+", "-+++")              // "-00+"
neutralise("+--", "+--")                // "+--"
neutralise("--+++-+-", "+++++---")      // "00+++-0-"
