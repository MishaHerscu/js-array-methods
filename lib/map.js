'use strict';

// map() takes an array and calls the callback on each member of the array and
// returns a new array with all the results of these operations
let map = function(array, callback) {
  let newArray = [];

  for(let i = 0, size = array.length; i < size; i++){
    newArray.push(callback(array[i]));
  }

  return newArray;
};

module.exports = map;
