// Факториал числа n равен произведению чисел от 1 до n.
// Ноль в конце произведения появляется в результате перемножения 2 и 5.
// Но поскольку при разложении на простые множители числа n! двоек больше чем пятерок,
// то количество нулей в конце n! равно количеству пятерок в разложении n! на простые множители.


// | n |   | n |   | n |
// | — | + | — | + | — |
// | 5 |   | 5 | | 5 |


// Solution:

function zeros(n) {
  var counter = 0;
  for (var i = 5; n/i >= 1; i *= 5)
    counter += Math.floor(n/i);
  return counter;
}

// Sample Tests:

zeros(0)  // 0, "Testing with n = 0"
zeros(5)  // 1, "Testing with n = 5"
zeros(6)  // 1, "Testing with n = 6"
zeros(30) // 7, "Testing with n = 30"
