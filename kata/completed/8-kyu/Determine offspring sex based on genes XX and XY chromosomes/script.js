// Solution:

function chromosomeCheck(sperm) {
  return sperm.includes('Y') ?
         "Congratulations! You're going to have a son." :
         "Congratulations! You're going to have a daughter."
}

// Sample Tests:

chromosomeCheck('XY') // "Congratulations! You're going to have a son."
chromosomeCheck('XX') // "Congratulations! You're going to have a daughter."
