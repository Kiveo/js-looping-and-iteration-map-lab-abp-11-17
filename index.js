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
  return newArray;
}
/*
*  this function takes an array of drivers as JavaScript objects and returns a string saying
*  `"<NAME OF DRIVER> is from <HOMETOWN>"` for each JavaScript object in the array.
*  Note that between the `<` and `>` we are looking for the value stored in the `name` and
*  `hometown` object attributes, not the strings `"DRIVER"` or `"HOMETOWN"`.
*/
function attributesToPhrase(array2) {
  let neoArray = array2.map(function(value) {
    
    
  } ) ;
  debugger;
  return neoArray;
}
