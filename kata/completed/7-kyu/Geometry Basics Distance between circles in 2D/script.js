// Solution:

function distanceBetweenCircles(a, b){
  const x = a.center.x - b.center.x;
  const y = a.center.y - b.center.y;

  const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) - a.radius - b.radius

  return distance > 0 ? distance : 0;
}

// Sample Tests:

var a,b;

a = Circle(Point(10, 60), 11);
b = Circle(Point(40, 20), 7);
distanceBetweenCircles(a,b) // 32

// a = Circle(Point(10, 60), 40);
// b = Circle(Point(40, 20), 40);
// distanceBetweenCircles(a,b) // 0

// a = Circle(Point(100, 100), 50);
// b = Circle(Point(102, 110), 10);
// distanceBetweenCircles(a,b) // 0
