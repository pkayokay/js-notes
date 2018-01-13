This is what promises do, but with better naming. If HTML image elements had a "ready" method that returned a promise, we could do this:

img1.ready().then(function() {
  // loaded
}, function() {
  // failed
});

// and…
Promise.all([img1.ready(), img2.ready()]).then(function() {
  // all loaded
}, function() {
  // one or more failed
});

Promises are a bit like event listeners except:
- A promise can only succeed or fail once, cannot succeed or fail twice, neither can it switch from success to failure or vice versa.
- If a promise has succeeded or failed and you later add a success / failure callback, the correct callback will be called, even though the event took place earlier.

Promise Terminology:
- fullfilled: the action relating to the promise succeeded
- rejected: the action relating to the promise failed
- pending: hasn't fulfilled or rejected yet
- settled: has fulfilled or rejected

Here's how to create a Promise:

var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then...

  if (/*everything turned out fine */) {
    resolve("Stuff worked!");
  } else {
    reject(Error("It's broken!"))
  }
})


here's how we use that promise:

promise.then(function(result) {
  console.log(result) // Stuff worked!
}, functio(err) {
  console.log(err) // It broke!
})

