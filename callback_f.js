// http://recurial.com/programming/understanding-callback-functions-in-javascript/

//Call back function

// define our function with the callback argument
function some_function(arg1, arg2, callback) {
  // this generates a random number between
  // arg1 and arg2
  var my_number = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
  // then we're done, so we'll call the callback and
  // pass our result
  callback(my_number);
}
// call the function
some_function(5, 15, function(dasd) {
  // this anonymous function will run when the
  // callback is called
  console.log("callback called! " + dasd);
});

