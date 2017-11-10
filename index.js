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
  let index = head1.indexOf(" ");  // Get first index where a space occours
  let fname = head1.substr(0, index); // Get first name
  let lname = head1.substr(index + 1);  // Get last name
  let head2 = "firstName: " + fname;
  let head3 = "lastName: " + lname;
  debugger;
  //give an attribute
  head1.assign({}, head1, head2, head3 );
}

// take "First Last" string collection and split into f:"first" l:"last"
function nameToAttributes(array2, namestring) {
  return array2.map(hydra(head1) );
}
