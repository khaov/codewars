// Solution:

String.prototype.camelCase=function(){
  return this.split(' ').map(function(word){
    return word.substring(0, 1).toUpperCase() + word.substring(1);
  }).join('');
}

// Sample Tests:

"test case".camelCase() // "TestCase"
"camel case method".camelCase() // "CamelCaseMethod"
"say hello ".camelCase() // "SayHello"
" camel case word".camelCase() // "CamelCaseWord"
"".camelCase() // ""
