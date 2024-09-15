// Solution:

function sumCircles() {
  let circles = [];

  for (argument in arguments) {
    circles.push(Math.PI * Math.pow(arguments[argument] / 2, 2))
  }

  return `We have this much circle: ${Math.round(circles.reduce((sum, num) => sum += num))}`;
}

// Sample Tests:

sumCircles(2)                           // 'We have this much circle: 3'
sumCircles(2, 3, 4)                     // 'We have this much circle: 23'
sumCircles(1, 1, 1)                     // 'We have this much circle: 2'
sumCircles(13.58, 14.9, 56.99, 107.321) // 'We have this much circle: 11916'
