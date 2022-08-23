// Solution:

function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
}

// Sample Tests:

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')                   // 'Hello, John Smith! Welcome to Phoenix, Arizona!'
sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois')  // 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!'
sayHello(['Wallace','Russel','Osbourne'],'Albany','New York')       // 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!'
