// Solution:

const areaOrPerimeter = function(l , w) {
  return l === w ? l * w : (l + w) * 2;
};

// Sample Tests:

areaOrPerimeter(4 , 4) // 16
areaOrPerimeter(6 , 10) // 32
