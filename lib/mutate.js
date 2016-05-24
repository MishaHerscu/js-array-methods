'use strict';

// mutate() takes an array
// it changes each value in the array using the callback function
// and returns the original array, but with the updated values

const mutate = function(array, transform) {
  console.log(array);
  for(let i = 0, max = array.length; i < max; i++){
    array[i] = transform(array[i]);
  }
  console.log(array);
  return array;
};

module.exports = mutate;

// Tests
let test_array = [1,2,4];

const double = function(x){
  return 2*x;
};

mutate(test_array, double);
