// Solution:

function removeChar(str){
  return str.slice(1, str.length - 1);
};

// Sample Tests:

removeChar('eloquent')  // 'loquen'
removeChar('country')   // 'ountr'
removeChar('person')    // 'erso'
removeChar('place')     // 'lac'
removeChar('ooopsss')   // 'oopss'