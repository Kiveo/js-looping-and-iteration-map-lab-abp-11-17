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
function hydra(head1) {
  let index = head1.indexOf(" ");  // Gets the first index where a space occours
  let id = head1.substr(0, index); // Gets the first name
  let text = head1.substr(index + 1);  // Gets the last name
  //give an attribute
  Object.assign({}, thing2, {firstName: thing2.} )
}

// take "First Last" string collection and split into f:"first" l:"last"
function nameToAttributes(array2, namestring) {
  return
}
