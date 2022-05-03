// Solution:

function chooseBestSum(t, k, ls) {
  if (ls.length >= k) {
    let distances = [];

    let start = ls.slice(0, ls.length - (k - 1));

    for(let startIndex = 0; startIndex < start.length; startIndex++) {
      let interimIndex = startIndex;

      while (interimIndex < start.length) {
        let path = ls.slice(interimIndex + 1, interimIndex + k);
        distances.push([start[startIndex]].concat(path).reduce((sum, distance) => sum += distance))
        interimIndex++
      }
    }

    return distances.filter(distance => distance <= t).sort((prev, next) => next - prev)[0];
  } else {
    return null;
  }
}

// Sample Tests:

let ls = [50, 55, 57, 58, 60]
chooseBestSum(174, 3, ls) // 173

ls = [50, 55, 56, 57, 58]
chooseBestSum(163, 3, ls) // 163

ls = [50]
chooseBestSum(163, 3, ls) // null

ls = [91, 74, 73, 85, 73, 81, 87]
chooseBestSum(230, 3, ls) // 228

ls = [91, 74, 73, 85, 73, 81, 87];
chooseBestSum(331, 2, ls) // 178

ls = [91, 74, 73, 85, 73, 81, 87];
chooseBestSum(331, 4, ls) // 331
