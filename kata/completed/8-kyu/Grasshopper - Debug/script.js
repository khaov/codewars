// Solution:

function weatherInfo (temp) {
  var c = convertToCelsius(temp);
  if (c <= 0)
    return (c + " is freezing temperature");
  else
    return (c + " is above freezing temperature");
}

function convertToCelsius (temperature) {
  var celsius = (temperature - 32) * (5/9);
  return celsius;
}

// Sample Tests:

weatherInfo(50) // '10 is above freezing temperature'
weatherInfo(23) // '-5 is freezing temperature'
