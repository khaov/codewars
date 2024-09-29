// Solution:

function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length].name
}

// Sample Tests:

const players = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];

duckDuckGoose(players, 1)   // "a"
duckDuckGoose(players, 3)   // "c"
duckDuckGoose(players, 10)  // "z"
duckDuckGoose(players, 20)  // "z"
duckDuckGoose(players, 30)  // "z"
duckDuckGoose(players, 18)  // "g"
duckDuckGoose(players, 28)  // "g"
duckDuckGoose(players, 12)  // "b"
duckDuckGoose(players, 2)   // "b"
duckDuckGoose(players, 7)   // "f"
