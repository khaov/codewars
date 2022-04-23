// Solution:

function cakes(recipe, available) {
  const recipeIngredients = Object.getOwnPropertyNames(recipe);
  let possibleCakes= []

  for (let i = 0; i < recipeIngredients.length; i += 1) {
    if (recipeIngredients[i] in available && available[recipeIngredients[i]] >= recipe[recipeIngredients[i]]){
      ingredientCounter = Math.floor(available[recipeIngredients[i]] / recipe[recipeIngredients[i]])
      possibleCakes.push(ingredientCounter)
    } else {
      return 0
    }
  }

  return possibleCakes.sort((a, b) => a - b)[0]

}

// Sample Tests:

recipe = {flour: 500, sugar: 200, eggs: 1};
available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
cakes(recipe, available) // 2

recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};
cakes(recipe, available) // 0

recipe = {"milk":6,"oil":77,"flour":87};
available = {"flour":4000,"apples":9300,"pears":1000,"butter":9500,"oil":9000,"chocolate":1300,"milk":3100,"cocoa":6100,"sugar":500,"eggs":1200,"crumbles":100,"nuts":9700,"cream":8500};
cakes(recipe, available) // 0


