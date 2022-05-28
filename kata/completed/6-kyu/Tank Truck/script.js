// Solution:

function tankvol(h, d, vt) {
  const tankLength = (4 * vt) / (Math.pow(d, 2) * Math.PI);

  const cylinderArea = Math.pow(d / 2, 2) * Math.acos(1 - h / (d / 2));
  const triangleArea  = ((d / 2) - h) * Math.sqrt(2 * (d / 2) * h - Math.pow(h, 2));
  const circularArea = cylinderArea - triangleArea;

  return Math.floor(circularArea * tankLength);
}

// Sample Tests:

tankvol(5, 7, 3848) // 2940
tankvol(2, 7, 3848) // 907
