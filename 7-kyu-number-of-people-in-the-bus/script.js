// Solution:

var number = function(busStops){
  return busStops.reduce((sum, people) => sum = sum + people[0] - people[1], 0)
}

// Sample Tests:

number([[10,0],[3,5],[5,8]]) // 5
number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) // 17
number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) // 21
number([[0,0]]) // 0