'use strict';
// Create a new object, that prototypally inherits from the Error constructor.
var Errorie = function(errorObj) {
  this.name = 'Errorie['+errorObj.name+']' || 'Errorie';
  this.message = errorObj.message || 'Uncaught Error';
};
Errorie.prototype = Object.create(Error.prototype);
Errorie.prototype.constructor = Errorie;

module.exports = Errorie;