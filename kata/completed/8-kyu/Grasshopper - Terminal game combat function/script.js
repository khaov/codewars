// Solution:

function combat(health, damage) {
  return health - damage >=0 ? health - damage : 0;
}

// Sample Tests:

combat(100, 5)  // 95
combat(92, 8)   // 84
combat(20, 30)  // 0, "Health cannot go below 0"
