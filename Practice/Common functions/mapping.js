// creates a new array with the reslts of calling a provided function on every element in this array.
// myArray.map(myFunction);
// function taken as an argument by map is known as the call back, it is called on every element in the original array

incrementByOne = function(element) {
  return element + 1;
}

myArray = [1,2,3,4];

console.log(myArray.map(incrementByOne));


// map vs forEach
// forEach() executes a provided function once per array element

myArray = [1,2,3,4];

myArray.forEach(alert); // it's not doing anything with the results (modifying)


// Anonymous Functions

myArray = [1,2,3,4];

myArray.map(function(element) {
  return element + 1;
});


// ES2015 let's us rewrite anonymous function like this:
(argument, argument2) => {...} 
(argument) => {...}
// for single arguments
argument => {...}

// so...
myArray = [1,2,3,4];

myArray.map(element => {
  return element + 1;
});

// if we're just returning a value we can shorten this even further
myArray.map(element => element +1);

