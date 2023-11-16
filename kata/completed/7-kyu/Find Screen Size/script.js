// Solution:

function findScreenHeight(width, ratio) {
  const aspect = ratio.split(":");
  return `${width}x${width * aspect[1] / aspect[0]}`
}

// Sample Tests:

findScreenHeight(1024,"4:3")  //  "1024x768"
findScreenHeight(1280,"16:9") //  "1280x720"
findScreenHeight(3840,"32:9") //  "3840x1080"
