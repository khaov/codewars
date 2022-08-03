// Solution:

function rainAmount(mm){
  return mm < 40 ? "You need to give your plant " + `${Math.abs(mm - 40)}` + "mm of water"
                 : "Your plant has had more than enough water for today!";
}

// Sample Tests:

rainAmount(100) // "Your plant has had more than enough water for today!"
rainAmount(39)  // "You need to give your plant 1mm of water"
