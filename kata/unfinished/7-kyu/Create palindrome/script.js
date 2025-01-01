// Solution:

function solve(s){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let changes = [s];

  for(let i = 0; i < s.length; i++) {
    let lastChange = changes[changes.length-1];

    if (s[i] == "a") {
      lastChange.split('')[i]

      changes.push()

    } else if(s[i] == "z") {

    } else {

    }
  }

}

// Examples:

// "adfa" -> [
//   "begb",
//   "beeb",
//   "bcgb",
//   "bceb"
// ]

// Sample Tests:

solve("abba")     // true
// solve("abaazaba") // false
// solve("abccba")   // true
// solve("adfa")     // true
// solve("ae")       // false
// solve("abzy")     // false
// solve("ababbaba") // true
// solve("sq")       // true
// solve("kxbkwgyydkcbtjcosgikfdyhuuprubpwthgflucpyylbofvqxkkvqthmdnywpaunfihvupbwpruwfybdmgeuocltdaidyyewmbzm") // true
