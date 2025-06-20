// Solution:

function tacofy(word) {
  const ingredients = ["a", "e", "i", "o", "u", "t", "l", "c", "g", "s"]
  const representing = {
    a : "beef",
    e : "beef",
    i : "beef",
    o : "beef",
    u : "beef",
    t : "tomato",
    l : "lettuce",
    c : "cheese",
    g : "guacamole",
    s : "salsa"
  }

  let taco = word.split('')
             .map(letter => letter.toLowerCase())
             .filter(letter => ingredients.includes(letter))
             .map(ingredient => representing[ingredient]).join(' ');

  return `shell ${taco} shell`.split(' ').filter(ingredient => ingredient !== '');
}

// Sample Tests:

tacofy(""); // ['shell', 'shell']
tacofy("a"); // ['shell', 'beef', 'shell']
tacofy("ggg"); // ['shell', 'guacamole', 'guacamole', 'guacamole', 'shell']
tacofy("ogl"); // ['shell', 'beef', 'guacamole', 'lettuce', 'shell']
tacofy("ydjkpwqrzto"); // ['shell', 'tomato', 'beef', 'shell']
tacofy("CODe waRs"); // ['shell', 'cheese', 'beef', 'beef', 'beef', 'salsa', 'shell' ]
