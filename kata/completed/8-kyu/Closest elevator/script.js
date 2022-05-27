// Solution:

function elevator(left, right, call) {

  function floorDistance(current, destination){
    return Math.abs(current - destination)
  }

  return floorDistance(right, call) <= floorDistance(left, call) ? 'right' : 'left';
}

// Sample Tests:

elevator(0,1,0) // 'left'
elevator(0,1,1) // 'right'
elevator(0,1,2) // 'right'
elevator(0,0,0) // 'right'
elevator(0,2,1) // 'right'

