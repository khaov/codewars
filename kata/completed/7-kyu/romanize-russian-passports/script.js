// Solution:

const icaoRomanization = {
  а:	"a",
  б:	"b",
  в:	"v",
  г:	"g",
  д:	"d",
  е:	"e",
  ё:	"e",
  ж:	"zh",
  з:	"z",
  и:	"i",
  й:	"i",
  к:	"k",
  л:	"l",
  м:	"m",
  н:	"n",
  о:	"o",
  п:	"p",
  р:	"r",
  с:	"s",
  т:	"t",
  у:	"u",
  ф:	"f",
  х:	"kh",
  ц:	"ts",
  ч:	"ch",
  ш:	"sh",
  щ:	"shch",
  ъ:	"ie",
  ы:	"y",
  ь:	"",
  э:	"e",
  ю:	"iu",
  я:	"ia"
}

function romanize(cyrillic) {
  return cyrillic.split('').map(function(letter){
    if (letter !== " "){
      if (letter === letter.toUpperCase()){
        if (icaoRomanization[letter.toLowerCase()].length > 1){
          return icaoRomanization[letter.toLowerCase()][0].toUpperCase() + icaoRomanization[letter.toLowerCase()].substr(1)
        } else {
          return icaoRomanization[letter.toLowerCase()].toUpperCase()
        }
      } else {
        return icaoRomanization[letter]
      }
    } else {
      return " "
    }
  }).join('');
}

// Sample Tests:

romanize("Иван Иванович")       // "Ivan Ivanovich"
romanize("Анастасия Иванов")    // "Anastasiia Ivanov"
romanize("Настя Попов")         // "Nastia Popov"
romanize("Никита Смирнов")      // "Nikita Smirnov"
romanize("Влад Соколов")        // "Vlad Sokolov"
romanize("Ольга Кузнецова")     // "Olga Kuznetsova"
romanize("Александр Васильев")  // "Aleksandr Vasilev"
romanize("Цветочек Михайлов")   // "Tsvetochek Mikhailov"
romanize("Дима Петров")         // "Dima Petrov"
