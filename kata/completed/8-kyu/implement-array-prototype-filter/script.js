// Solution:

Array.prototype.filter = function (func) {
  const newArray = []

  for (let i = 0; i < this.length; i++) {
    if ( func(this[i]) ) {
      newArray.push(this[i])
    }
  }

  return newArray
}

// Sample Tests:

[1,2,3,4].filter((num)=>{ return num > 3}) // [4]
