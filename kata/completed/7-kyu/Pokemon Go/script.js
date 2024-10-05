// Solution:

function pidgeyCalc (pidgeys, candy) {
  let XP = 0;

  while (pidgeys > 0) {
    if (candy >= 12) {
      pidgeys--;
      candy = candy - 12;

      XP = XP + 500;
      candy++
    } else {
      pidgeys--;
      candy++;
    };
  }

  return XP;
}

// Sample Tests:

pidgeyCalc(1, 12)   // 500
pidgeyCalc(13, 144) // 6500
pidgeyCalc(10, 63)  // 3000
pidgeyCalc(1, 63)   // 500
pidgeyCalc(63, 1)   // 2500
pidgeyCalc(0, 0)    // 0
