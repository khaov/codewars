// Solution:

function evaporator(content, evap_per_day, threshold){

  let evaporatorContent = content;
  let days = 0

  do{
    evaporatorContent = evaporatorContent - evaporatorContent * evap_per_day / 100
    evaporatoravAlable = evaporatorContent * 100 / content
    days ++
  } while (evaporatoravAlable >= threshold)

  return days
}

// Sample Tests:

evaporator(10,10,10) // 22
