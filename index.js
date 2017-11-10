// Code your solution in this file.

function lowerCaseDrivers(somearray) {
    //create a new array while lowercasing its elements
    const lowarray = somearray.map(function(thing) {
      return thing.toLowerCase();
    } ) ; //array.map(function(that)[changes to lowercase])
    return lowarray;
}
