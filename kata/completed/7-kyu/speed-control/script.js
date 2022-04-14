// Solution:

function gps(s, x) {
  if (x.length > 1) {
    let speed = [];

    x.forEach(function(point, index, points) {
      if (index !== points.length -1) {
        if(points[index+1] - point)
        speed.push(3600 * (points[index + 1] - point) / s);

      }
    });

    return Math.floor(Math.max.apply(0, speed));
  } else {
    return 0;
  }
}

// Sample Tests:

gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61])  // 41
gps(19, [0.0])                                            // 0
gps(19, [])                                               // 0
