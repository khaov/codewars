// Solution:

function quicksum(packet) {
  const alphabet = ' abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

  let packetLetters = packet.split('')

  if (packetLetters.every(letter => alphabet.includes(letter))) {
    return packetLetters.reduce((sum, letter, index) => sum += (index + 1) * alphabet.indexOf(letter), 0);
  } else {
    return 0;
  }
}

// Sample Tests:

quicksum("ACM")                               // 46
quicksum("MID CENTRAL")                       // 650
quicksum("BBC")                               // 15
quicksum("???")                               // 0
quicksum("axg ")                              // 0
quicksum("234 234 WEF ASDF AAA 554211 ???? ") // 0
quicksum("A C M")                             // 75
