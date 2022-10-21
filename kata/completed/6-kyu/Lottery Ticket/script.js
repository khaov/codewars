// Solution:

function bingo(ticket, win){
  return ticket.reduce((wins, item) => wins += item[0].split('').some(letter => letter.charCodeAt(0) === item[1]) ? 1 : 0, 0) >= win ?
         'Winner!' : 'Loser!'
}

// Sample Tests:

bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2)    // 'Loser!'
bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1)    // 'Winner!'
bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3)  // 'Loser!'
