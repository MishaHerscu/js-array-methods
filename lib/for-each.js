'use strict';

// forEach will take an array and apply the callback
// to each member of the array without
// mutating the original array. It must return undefined.
let forEach = function(array, callback) {
  for (let i = 0, max = array.length; i < max; i++) {
    callback(array[i]);
  }
  return undefined;
};

module.exports = forEach;
