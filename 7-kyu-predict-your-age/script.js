// Solution:

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let sourceArray = [];

  for (item in arguments) {
    sourceArray.push(arguments[item] *= arguments[item]);
  }

  const sourceArraySum = sourceArray.reduce(function(prev, item) {
    return prev + item;
  }, 0);

  return Math.floor(Math.sqrt(sourceArraySum) / 2);
}

// Sample Tests:

predictAge(65,60,75,55,60,63,64,45) // 86
