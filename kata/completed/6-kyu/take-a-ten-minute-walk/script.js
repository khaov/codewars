// Solution:

function isValidWalk(walk) {
  
  let time = walk.length
  let x = 0;
  let y = 0;

  walk.forEach(function(direction){
    if (direction === 'n') {y+=1}
    if (direction === 's') {y-=1}
    if (direction === 'e') {x+=1}
    if (direction === 'w') {x-=1}
  })

  return (time === 10 && x===0 && y===0)
}

// Sample Tests:

isValidWalk(['n','s','n','s','n','s','n','s','n','s']) // 'should return true'
!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']) // 'should return false'
!isValidWalk(['w']) // 'should return false'
!isValidWalk(['n','n','n','s','n','s','n','s','n','s']) // 'should return false'
