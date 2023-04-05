// Solution:

function warnTheSheep(queue) {
  const sheepQueue = queue.reverse();
  return sheepQueue.indexOf("wolf") === 0 ?
        "Pls go away and stop eating my sheep" :
        `Oi! Sheep number ${sheepQueue.indexOf("wolf")}! You are about to be eaten by a wolf!`
}

// Sample Tests:

warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]) //"Oi! Sheep number 2! You are about to be eaten by a wolf!"
warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]) // "Oi! Sheep number 5! You are about to be eaten by a wolf!"
warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]) // "Oi! Sheep number 6! You are about to be eaten by a wolf!"
warnTheSheep(["sheep", "wolf", "sheep"]) // "Oi! Sheep number 1! You are about to be eaten by a wolf!"
warnTheSheep(["wolf"]) // "Pls go away and stop eating my sheep"
warnTheSheep(["sheep", "sheep", "wolf"]) // "Pls go away and stop eating my sheep"
