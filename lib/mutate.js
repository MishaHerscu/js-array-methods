'use strict';

// mutate() takes an array
// it changes each value in the array using the callback function
// and returns the original array, but with the updated values

const mutate = function(array, transform) {
  for(let i = 0, max = array.length; i < max; i++){
    array[i] = transform(array[i]);
  }
  return array;
};

module.exports = mutate;
