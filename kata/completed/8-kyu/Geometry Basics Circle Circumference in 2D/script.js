// Solution:

function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

// Sample Tests:

+circleCircumference(new Circle(new Point(10, 10), 30)).toFixed(6)    // 188.495559
+circleCircumference(new Circle(new Point(25, -70), 30)).toFixed(6)   // 188.495559
+circleCircumference(new Circle(new Point(-15, 5), 0)).toFixed(6)     // 0
+circleCircumference(new Circle(new Point(-15, 5), 12.5)).toFixed(6)  // 78.539816
