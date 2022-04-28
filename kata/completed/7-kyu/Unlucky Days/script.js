// Solution:

function unluckyDays(year) {
  let unluckyDays = 0;

  for (var i = 0; i < 12; i++) {
    if(new Date(year, i, 13).getDay() === 5) {
      unluckyDays++
    }
  }

  return unluckyDays
}

// Sample Tests:

unluckyDays(1586) // 1
unluckyDays(1001) // 3
unluckyDays(2819) // 2
unluckyDays(2792) // 2
unluckyDays(2723) // 2
unluckyDays(1909) // 1
unluckyDays(1812) // 2
unluckyDays(1618) // 2
unluckyDays(2132) // 1
unluckyDays(2065) // 3