// Solution:

const quarterOf = (month) => {
  switch (true) {
    case (month >=1 && month <=3):
      return 1;
      break;
    case (month >=4 && month <=6):
      return 2;
      break;
    case (month >=7 && month <=9):
      return 3;
      break;
    case (month >=10 && month <=12):
      return 4;
      break;
  }
}

// Sample Tests:

quarterOf(3)  // 1
quarterOf(8)  // 3
quarterOf(11) // 4
