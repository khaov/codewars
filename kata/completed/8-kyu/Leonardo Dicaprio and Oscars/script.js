// Solution:

function leo(oscar) {
  switch (true) {
    case oscar === 88:
      return "Leo finally won the oscar! Leo is happy"
      break;
    case oscar === 86:
      return "Not even for Wolf of wallstreet?!"
      break;
    case oscar !== 88 && oscar !== 86 && oscar < 88:
      return "When will you give Leo an Oscar?"
      break;
    case oscar !== 88 && oscar !== 86 && oscar > 88:
      return "Leo got one already!"
      break;
  }
}

// Sample Tests:

leo(89) // "Leo got one already!"
leo(88) // "Leo finally won the oscar! Leo is happy"
leo(87) // "When will you give Leo an Oscar?"
leo(86) // "Not even for Wolf of wallstreet?!"
