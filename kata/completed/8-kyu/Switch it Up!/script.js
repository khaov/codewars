// Solution:

function switchItUp(number){
  let output = "";
  switch (number) {
    case 0: output = "Zero";  break;
    case 1: output = "One";   break;
    case 2: output = "Two";   break;
    case 3: output = "Three"; break;
    case 4: output = "Four";  break;
    case 5: output = "Five";  break;
    case 6: output = "Six";   break;
    case 7: output = "Seven"; break;
    case 8: output = "Eight"; break;
    case 9: output = "Nine";  break;
  }
  return output;
}

// Sample Tests:

switchItUp(0) // "Zero"
switchItUp(1) // "One"
switchItUp(2) // "Two"
switchItUp(3) // "Three"
switchItUp(4) // "Four"
switchItUp(5) // "Five"
switchItUp(6) // "Six"
switchItUp(7) // "Seven"
switchItUp(8) // "Eight"
switchItUp(9) // "Nine"
