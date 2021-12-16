// Description:

/*
  Write function bmi that calculates body mass index (bmi = weight / height2).
  if bmi <= 18.5 return "Underweight"
  if bmi <= 25.0 return "Normal"
  if bmi <= 30.0 return "Overweight"
  if bmi > 30 return "Obese"
*/

// Solution:

/* if...else solution */

// function bmi(weight, height) {
//   const bmi = weight / Math.pow(height, 2);
//   if (bmi <= 18.5) {
//     return "Underweight"
//   } else if (bmi > 18.5 && bmi <= 25.0) {
//     return "Normal"
//   } else if (bmi > 25.0 && bmi <= 30.0) {
//     return "Overweight"
//   } else {
//     return "Obese"
//   }
// }

/* logical operators solution */

// function bmi(weight, height) {
//   const bmi = weight / Math.pow(height, 2);
//   return bmi <= 18.5 && 'Underweight' || bmi <= 25 && 'Normal' || bmi <= 30 && 'Overweight' || 'Obese';
// }

/* object solution */

function bmi(weight, height) {
  const bmi = weight / Math.pow(height, 2);

  let weightRange = {
    'Underweight': 18.5,
    'Normal': 25,
    'Overweight': 30,
    'Obese': 30
  };

  const diff = {};

  for (const key of Object.keys(weightRange)) {
    diff[key] = weightRange[key] - bmi;
  }
  for (const key of Object.keys(diff)) {
    if (diff[key] >= 0 || key === 'Obese') {
      return key;
    }
  }
}

// Sample Tests:

bmi(80, 1.80) // "Normal"
