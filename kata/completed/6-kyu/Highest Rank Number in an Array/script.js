// Solution:

function highestRank(arr){
  let ranks = {}

  arr.forEach(function(number) {
    if (!(number in ranks)) {
      ranks[number] = arr.filter(uniqNumber => uniqNumber === number).length;
    }
  });

  let sortableRanks = [];

  for (let key in ranks) {
    sortableRanks.push([key, ranks[key]]);
  }

  let higestRank = sortableRanks.sort((prev, next) => next[1] - prev[1])
                                .filter(item => item[1] === sortableRanks[0][1])
                                .sort((prev, next) => next[0] - prev[0])[0][0]

  return Number(higestRank);
}

// Sample Tests:

highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])             // 12
highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])         // 12
highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]) // 3
