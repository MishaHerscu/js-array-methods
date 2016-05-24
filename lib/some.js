'use strict';

// checks if at least one element of the array satisfies the condition
let some = function(array, callback) {
  for(let i=0, max = array.length; i < max; i++){
    if(callback(array[i])){
      return true;
    }
  }
  return false;
};

module.exports = some;
