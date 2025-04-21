// Solution:

function product (string) {
  function filter(symbol) {
    return string.split('').filter(item => item == symbol).length;
  }

  const exclamationMarks = filter('!');
  const questionMarks = filter('?');

  return exclamationMarks * questionMarks;
}

// Sample Tests:

product("")           // 0
product("!")          // 0
product("!!")         // 0
product("!??")        // 2
product("!???")       // 3
product("!!!??")      // 6
product("!!!???")     // 9
product("!???!!")     // 9
product("!ab? ?")     // 2
product("!????!!!?")  //20
