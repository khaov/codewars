// Solution:

function euclideanDistance(point1, point2){
  const dimensional = point1.length;
  let points = [];

  for (let i = 0; i < dimensional; i++) {
    points.push(Math.pow(point2[i] - point1[i], 2))
  }

  return Number(Math.sqrt(points.reduce((sum, point) => sum += point, 0)).toFixed(2));
}

// Sample Tests:

let p1 = [-1];
let p2 = [2];

euclideanDistance(p1, p2) // 3

p1 = [-1,2];
p2 = [2,4];

euclideanDistance(p1, p2) // 3.61

p1 = [-1,2,5];
p2 = [2,4,9];

euclideanDistance(p1, p2) // 5.39
