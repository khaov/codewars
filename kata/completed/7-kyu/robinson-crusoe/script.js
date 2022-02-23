// Solution:

function crusoe(n, d, ang, distmult, angmult) {
  let coordinates = [];
  let coordinatesX = 0;
  let coordinatesY = 0;

  let distance = d;
  let angle = ang * Math.PI / 180;

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      coordinatesX = d * Math.cos(angle);
      coordinatesY = d * Math.sin(angle);
    } else {
      distance = distance * distmult;
      angle = angle * angmult;

      coordinatesX = coordinatesX + (distance * Math.cos(angle));
      coordinatesY = coordinatesY + (distance * Math.sin(angle));
    }
  }

  coordinates.push(coordinatesX);
  coordinates.push(coordinatesY);

  return coordinates;

}

// Sample Tests:

crusoe(5, 0.2, 30, 1.02, 1.1)     // [0.8306737544381833, 0.620694691344071]
crusoe(8, 0.22, 3, 1.01, 1.15)    // [1.814652098870, 0.164646220964]
crusoe(29, 0.13, 21, 1.01, 1.09)  // [0.318341393410, 2.292862212314]
crusoe(45, 0.10, 3, 1.01, 1.10)   // [2.689897523779, 2.477953232467]
crusoe(14, 0.22, 20, 1.02, 1.14)  // [1.774076472485, 2.557008479031]
crusoe(42, 0.11, 17, 1.02, 1.09)  // [0.528555980656, 2.196434600133]
