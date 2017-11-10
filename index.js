// Code your solution in this file.

function lowerCaseDrivers(somearray) {
    /*  create a new array while lowercasing its elements
    *   Using array.map(function(that)[changes to lowercase])
    */
    const lowarray = somearray.map(function(thing) {
      return thing.toLowerCase();
    } ) ;
    return lowarray;
}
// callback for nameToAttributes
function phoenix(thing2) {
  let index = thing2.indexOf(" ");  // Gets the first index where a space occours
  let id = thing2.substr(0, index); // Gets the first part
  let text = thing2.substr(index + 1);  // Gets the text part
  //give an attribute
  Object.assign({}, thing2, {firstName: thing2.} )
}

// take "First Last" string collection and split into f:"first" l:"last"
function nameToAttributes(array2, namestring) {
  return
}
