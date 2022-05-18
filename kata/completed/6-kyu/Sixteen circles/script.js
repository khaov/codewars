// Solution:

function sixteenCircles(r) {
  const radius = r;
  const diameter = r*2;

  const a = Math.sqrt(Math.pow(diameter, 2) / 2);
  const b = Math.sqrt(Math.pow(diameter, 2) - Math.pow(radius, 2));

  return Number((a + b - diameter).toFixed(2));
}

// Sample Tests:

sixteenCircles(3)  // 3.44
sixteenCircles(15) // 17.19
