'use strict';

// checks if every element of an array satisfies a requirement
// the callback is a predicate
let every = function(array, callback) {
  for(let i=0, max = array.length; i < max; i++){
    if(!callback(array[i])){
      return false;
    }
  }
  return true;
};

module.exports = every;
