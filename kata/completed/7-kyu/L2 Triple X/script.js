// Solution:

function tripleX(str){
  const instances = str.split('');

  return instances.slice(instances.indexOf('x') + 1, instances.indexOf('x') + 3).join('') == 'xx';
}

// Sample Tests:

tripleX("abraxxxas")                      // true
tripleX("xoxotrololololololoxxx")         // false
tripleX("soft kitty, warm kitty, xxxxx")  // true
tripleX("softx kitty, warm kitty, xxxxx") // false