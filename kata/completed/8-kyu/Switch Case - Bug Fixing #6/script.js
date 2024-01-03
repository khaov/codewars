// Solution:

function evalObject(value) {
  switch(value.operation) {
    case'+': return value.a + value.b;
    case'-': return value.a - value.b;
    case'/': return value.a / value.b;
    case'*': return value.a * value.b;
    case'%': return value.a % value.b;
    case'^': return Math.pow(value.a, value.b);
  }
}

// Sample Tests:

evalObject({a:1,b:1,operation:'+'}) // 2
evalObject({a:1,b:1,operation:'-'}) // 0
evalObject({a:1,b:1,operation:'/'}) // 1
evalObject({a:1,b:1,operation:'*'}) // 1
evalObject({a:1,b:1,operation:'%'}) // 0
evalObject({a:1,b:1,operation:'^'}) // 1
