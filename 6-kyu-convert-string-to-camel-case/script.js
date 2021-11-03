// Solution:

function toCamelCase(str){
  const separators = ['-', '_'];
  return str.split(RegExp(separators.join('|'), 'g')).map(function(item, index){
    if (index !== 0){
      return item[0].toUpperCase() + item.substring(1);
    } else {
      return item;
    }
  }).join('');
}

// Sample Tests:

toCamelCase("the_stealth_warrior") // "theStealthWarrior"
toCamelCase("The-Stealth-Warrior") // "TheStealthWarrior"