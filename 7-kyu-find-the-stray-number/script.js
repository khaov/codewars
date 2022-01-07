// Solution:

// Проверяем, что индекс элемента равен индексу последнего вхождения элемента.

function stray(numbers) {
  return numbers.find(number => numbers.indexOf(number) === numbers.lastIndexOf(number));
}

// Sample Tests:

stray([1, 1, 2])                    // 2
stray([17, 17, 3, 17, 17, 17, 17])  // 3
