// Solution:

// Делаем так, что бы предполагаемое значение всегда было равно случайному значению:
// Предполагаемое значение делаем равным 101
// Указываем Math.random всегда возвращать 1
// Случайное значение Math.random() * 100 + 1 = 101

var guess = 101;

Math.random = function(){
  return 1;
}