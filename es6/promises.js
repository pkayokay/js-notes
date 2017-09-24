// A Promise is an object representing the eventual completion or failure of an asynchronous operation. A promise may be created using its constructor. However, most people are consumers of already-created promises returned from functions. This guide will therefore explore consumption of returned promises first.

// Events may happen before we start listening to them, so we need Promises.
// Events are great for things that happen multiple times on the same object.

// - fullfilled: sucessfully promise
// - rejected: failed promise
// - pending: not fulfilled or rejected
// - settled: has fulfilled or rejected


///////////////////////////////
// JavaScript Promises Video //
///////////////////////////////

let promiseToCleanRoom = new Promise(function(resolve, reject ) {
  // cleaning the room
  let isClean = true;

  if(isClean) {
    resolve('clean')
  } else {
    reject('not clean')
  }
})

// only executes the problem is resolved
promiseToCleanRoom.then(function(fromResolve) {
  console.log('the room is ' + fromResolve)
}).catch(function(fromReject) {
  console.log('the room is ' + fromReject)
})


// Example of needing to finish something before starting something else
// i.e. you cannot get the icecream until you remove the garbage and clean your room

// we're just resolving things right away for the sake of example
let cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve('cleaned the room, ');
  });
};


let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + 'remove garbage, ');
  });
};

let winIcecream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + 'won icecream.');
  });
};


// so let's first clean the room
cleanRoom().then(function(result) {
  return removeGarbage(result);  // this promise becomes the remove Garbage method
}).then(function(result) {
  return winIcecream(result);
}).then(function(result) {
  console.log('finished ' + result);
})


// if you want to do these in parallel
Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function() {
  console.log('all finished');
});

// logging when at least one is finished
Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function() {
  console.log('once of them is finished');
});

