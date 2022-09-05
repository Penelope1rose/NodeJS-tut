// CommonJS, every file is module (by default) 
// Modules - Encapsulated Code (only share minimum)

// imports an object
const names = require('./4-names');

// imports an function
const sayHi = require('./5-utils');

// imports an object attached to an export property
const data = require('./6-alternative-flavor'); 

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

// ----------------------------------------------------
// we have a function inside of a module that we invoked
// we didn't assign this import a variable or invoke it
// but it will still invoke the fn from the other side
require('./7-mindgrenade')
