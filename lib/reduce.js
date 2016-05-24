'use strict';

// reduce() takes an array and reduces it to one value.
// it provides the callback with previous and current arguments,
// and accumulates a final result. It should return that result.
let reduce = function(array, callback, init) {

  // can't inititalize as anything,
  // because we don't know what the initial value is.
  let result;

  if(init !== undefined){
    result = init;
  }

  for(let i = 0, max = array.length; i < max; i++){
    result = callback(result, array[i]);
  }

  return result;
};

module.exports = reduce;
