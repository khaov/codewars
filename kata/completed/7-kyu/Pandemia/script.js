// Solution:

function infected(s) {

  let population = 0;
  let infected = 0;

  if (s.includes(0) || s.includes(1) ){

    s.split('X').forEach(function(persons) {
      if (persons.length !== 0) {
        if (persons.includes(1)){
          infected += persons.length
        }
      }
      population += persons.length
    })

    return (infected * 100) /population

  } else {
    return 0
  }

}

// Sample Tests:

infected("01000000X000X011X0X")   // 73.33333333333333
infected("01X000X010X011XX")      // 72.72727272727273
infected("XXXXX")                 // 0
infected("0000000010")            // 100
infected("X00X000000X10X0100")    // 42.857142857142854
