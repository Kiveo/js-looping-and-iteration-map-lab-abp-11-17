// Code your solution in this file.

//callback function for lowercase
function makeLow(thing) {
  return thing.toLowerCase();
}

function lowerCaseDrivers(somearray) {
    //create a new array while lowercasing its elements
    const lowarray = somearray.map(makeLow);//array.map(function(that)[changes to lowercase])
    return lowarray;
}
