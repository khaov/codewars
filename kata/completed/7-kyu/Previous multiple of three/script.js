// Solution:

const prevMultOfThree = n => {
  if (n % 3 === 0) {
    return n;
  } else {
    let resultNumber = n;

    while (resultNumber % 3 !== 0 ) {
      resultNumber = Number(resultNumber.toString().slice(0, resultNumber.toString().length-1))
    }

    return resultNumber > 0 ? resultNumber : null;
  }
}

// Sample Tests:

prevMultOfThree(1)      // null
prevMultOfThree(25)     // null
prevMultOfThree(36)     // 36
prevMultOfThree(1244)   // 12
prevMultOfThree(952406) // 9
