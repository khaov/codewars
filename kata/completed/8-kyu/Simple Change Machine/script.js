// Solution:

function changeMe(moneyIn){
  switch (moneyIn) {
    case "£5":
      return `${'20p '.repeat(25).trim()}`;
      break;
    case "£2":
      return `${'20p '.repeat(10).trim()}`;
      break;
    case "£1":
      return `${'20p '.repeat(5).trim()}`;
      break;
    case "50p":
      return `${'20p '.repeat(2)}10p`;
      break;
      case "20p":
        return `${'10p '.repeat(2).trim()}`;
        break;
    default:
      return moneyIn;
  }
}

// £5, £2, £1, 50p, 20p

// Sample Tests:

changeMe("£1")    // "20p 20p 20p 20p 20p"
changeMe("Money") // "Money"
