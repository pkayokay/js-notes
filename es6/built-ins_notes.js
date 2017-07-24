// A JavaScript Promise is created with the new Promise constructor function.
// Lets you start a work that will be done asynchronously and let you get back to regular work.
// Give this as an argument of the constructor function.

new Promise(argument);


new Promise(function() {
  window.setTimeout(function createSundae(flavor = 'chocolate') {
    const sundae = {};
    // request ice cream
    // get cone
    // warm up ice cream scoop
    // scoop generous portion into cone!
  }, Math.random() * 200);
});

// this code creates a promise that will start in a few seconds after a request.

// then we need the code to notify us that it's finished, we call this a a 'resolve' and a 'reject'.
// below, we added 'resolve' to indicate that this function should be called when the request completes successfully.
new Promise(function() {
  window.setTimeout(function createSundae(flavor = 'chocolate') {
    const sundae = {};
    // request ice cream
    // get cone
    // warm up ice cream scoop
    // scoop generous portion into cone!
    resolve(sunday);
  }, Math.random() * 200);
});


// When the function is successfully, it calls resolve and passes the date to return

// if there is a problem with the request, then we can use a second function with an identifier called 'reject'.
new Promise(function (resolve, reject) {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
        if ( /* iceCreamConeIsEmpty(flavor) */ ) {
            reject(`Sorry, we're out of that flavor :-(`);
        }
        resolve(sundae);
    }, Math.random() * 2000);
});






// Promises return immediately


