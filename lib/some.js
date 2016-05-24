'use strict';

// checks if every element of an array satisfies a requirement
// the callback is a predicate
let some = function(array, callback) {
  for(let i=0, max = array.length; i < max; i++){
    if(callback(array[i])){
      return true;
    }
  }
  return false;
};

module.exports = some;
