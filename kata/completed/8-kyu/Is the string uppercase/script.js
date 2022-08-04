// Solution:

String.prototype.isUpperCase = function() {
  return this.toString() === this.toUpperCase();
}

// Sample Tests:

'c'.isUpperCase() // false, 'c is not upper case'
'C'.isUpperCase() // true, 'C is upper case'
'hello I AM DONALD'.isUpperCase() // false, 'hello I AM DONALD not is upper case'
'HELLO I AM DONALD'.isUpperCase() // true, 'HELLO I AM DONALD is upper case'
'ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase() // false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case'
'ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase() // true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case'

'Hello World'.isUpperCase() // false, 'Hello World is not upper case'
'hello world'.isUpperCase() // false, 'hello world is not upper case'
'Hello world'.isUpperCase() // false, 'Hello world is not upper case'
'hello World'.isUpperCase() // false, 'hello World is not upper case'
'HELLO WORLD'.isUpperCase() // true, 'HELLO WORLD is upper case'
'Bob walks his dog every day.'.isUpperCase() // false, 'Bob walks his dog every day. is not upper case'
'BOB walks his dog every day.'.isUpperCase() // false, 'BOB walks his dog every day. is not upper case'
'BOB WALKS HIS DOG EVERY DAY.'.isUpperCase() // true, 'BOB WALKS HIS DOG EVERY DAY. is upper case'
'BOB WALKs HIS DOG EVERY DAY.'.isUpperCase() // false, 'BOB WALKs HIS DOG EVERY DAY. is not upper case'
'#lovewins'.isUpperCase() // false, '#lovewins is not upper case'
'#Lovewins'.isUpperCase() // false, '#Lovewins is not upper case'
'#loveWins'.isUpperCase() // false, '#loveWins is not upper case'
'#LoveWins'.isUpperCase() // false, '#LoveWins is not upper case'
'#LOVEWins'.isUpperCase() // false, '#LOVEWins is not upper case'
'#LoveWINS'.isUpperCase() // false, '#LoveWINS is not upper case'
'#LOVEWINs'.isUpperCase() // false, '#LOVEWINs is not upper case'
'#lOVEWINS'.isUpperCase() // false, '#lOVEWINS is not upper case'
'#LOVEWINS'.isUpperCase() // true, '#LOVEWINS is upper case'
