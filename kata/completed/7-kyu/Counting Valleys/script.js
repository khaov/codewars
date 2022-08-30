// Solution:

function countingValleys(s) {
  const route = s.split('').filter(direction => direction !== "F");
  let valleys = 0;
  let level = 0;

  for (let direction = 0; direction < route.length; direction++) {
    // Tracking valleys
    if (route[direction] === "U" && level === -1) {
      valleys++
    }

    // Tracking level
    if (route[direction] === "U") {
      level++
    } else {
      level--
    }
  }

  return valleys;
}

// Sample Tests:

countingValleys('UFFDDFDUDFUFU');