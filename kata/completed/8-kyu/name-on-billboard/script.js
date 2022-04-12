// Solution:

function billboard(name, price = 30){
  return name.split('').reduce(sum => sum + price, 0);
}

// Sample Tests:

billboard("Jeong-Ho Aristotelis") // 600
billboard("Abishai Charalampos")  // 570
billboard("Idwal Augustin")       // 420
billboard("Hadufuns John",20)     // 260
billboard("Zoroaster Donnchadh")  // 570
billboard("Claude Miljenko")      // 450
billboard("Werner Vígi",15)       // 165
billboard("Anani Fridumar")       // 420
billboard("Paolo Oli")            // 270
billboard("Hjalmar Liupold",40)   // 600
billboard("Simon Eadwulf")        // 390
