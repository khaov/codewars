// Solution:

function roundToNext5(n){
  let round = n;
  while (round % 5 !== 0) {
    round++
  }
  return round;
}

// Sample Tests:

roundToNext5(0)   //  0
roundToNext5(1)   //  5
roundToNext5(-1)  //  0
roundToNext5(-5)  //  -5
roundToNext5(3)   //  5
roundToNext5(5)   //  5
roundToNext5(7)   //  10
roundToNext5(20)  //  20
roundToNext5(39)  //  40
roundToNext5(990) //  990
roundToNext5(121) //  125
roundToNext5(555) //  555
