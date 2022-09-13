// Solution:

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld *2);
}

// Sample Tests:

twiceAsOld(36,7)  //  22
twiceAsOld(55,30) //   5
twiceAsOld(42,21) //   0
twiceAsOld(22,1)  //  20
twiceAsOld(29,0)  //  29
