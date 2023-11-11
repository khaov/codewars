// Solution:

class Dinglemouse{

  constructor( firstName, lastName ){
    this._firstName = firstName;
    this._lastName = lastName;
  }

  getFullName(){
    return `${this._firstName} ${this._lastName}`.trim();
  }

}

// Sample Tests:

new Dinglemouse("Clint", "Eastwood").getFullName() // "Clint Eastwood"
