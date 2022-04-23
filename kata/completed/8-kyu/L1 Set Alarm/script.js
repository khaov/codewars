// Solution:

function setAlarm(employed, vacation){
  return employed === true && vacation === false
}

// Sample Tests:

setAlarm(true, true)    // false, "Should be false."
setAlarm(false, true)   // false, "Should be false."
setAlarm(false, false)  // false, "Should be false."
setAlarm(true, false)   // true,  "Should be true."
