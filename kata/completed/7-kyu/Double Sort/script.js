// Solution:

function dbSort(a){
  const numbers = a.filter(value => typeof value == 'number').sort((prev, next) => prev - next);
  const strings = a.filter(value => typeof value == 'string').sort();

  return numbers.concat(strings);
}

// Sample Tests:

dbSort([6, 2, 3, 4, 5])                                           // [2, 3, 4, 5, 6]
dbSort([14, 32, 3, 5, 5])                                         // [3, 5, 5, 14, 32]
dbSort([1, 2, 3, 4, 5])                                           // [1, 2, 3, 4, 5]
dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2])           // [0,2,2,"Apple","Banana","Mango","Orange"]
dbSort(["C", "W", "W", "W", 1, 2, 0])                             // [0,1,2,"C","W","W","W"]
dbSort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"])  // [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach']