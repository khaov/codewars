// Solution:

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name === 'Santa Claus' && password === 'Ho Ho Ho!';
};

// Sample Tests:

var sleigh = new Sleigh();

sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE

sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)
