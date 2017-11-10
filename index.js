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

// take "First Last" string collection and split into f:"first" l:"last"
function nameToAttributes(array1, namestring) {
  let newArray = array1.map(function (head1) {
    let indexer = head1.indexOf(' '); //get index of space
    let fname = head1.substr(0, indexer); //get first name
    let lname = head1.substr(indexer + 1); //get last name
    return Object.assign({}, namestring, { firstName: fname }, {lastName: lname} );
  } );
  debugger;
  return newArray;
}
