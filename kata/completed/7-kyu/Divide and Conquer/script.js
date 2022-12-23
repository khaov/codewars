// Solution:

function divCon(x) {
  const stringIntegers = x.reduce((sum, number) => typeof number ==="string" ? sum += Number(number) : sum, 0);
  const numberIntegers = x.reduce((sum, number) => typeof number ==="number" ? sum += Number(number) : sum, 0);

  return numberIntegers - stringIntegers;
}

// Sample Tests:

divCon([9, 3, '7', '3'])                      // 2
divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])     // 14
divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']) // 13
