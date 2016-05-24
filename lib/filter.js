'use strict';

// returns a new array of only the elements that pass the test
let filter = function(array, callback) {
  let result = [];
  for(let i=0, max = array.length; i < max; i++){
    if(callback(array[i])){
      result.push(array[i]);
    }
  }
  return result;
};

module.exports = filter;
