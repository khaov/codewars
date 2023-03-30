// Solution:

function removeRotten(bagOfFruits){
    return bagOfFruits ?
           bagOfFruits.map(fruit => fruit.includes('rotten') ? fruit.slice(6).toLowerCase() : fruit) : 
           [];
}

// Sample Tests:

removeRotten(["apple","rottenBanana","kiwi","melone","orange"]) // ["apple","banana","kiwi","melone","orange"]
removeRotten(["apple","banana","kiwi","melone","orange"]) // ["apple","banana","kiwi","melone","orange"]
removeRotten([]) // []