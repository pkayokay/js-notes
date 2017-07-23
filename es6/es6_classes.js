// Example of a class in ES6
class Dessert {
  constructor(calories = 250) {
    this.calories = calories;
  }
}

class IceCrem extends Dessert {
  constructor(flavor, calories, toppings = []) {
    super(calories);
    this.flavor = flavor;
    this.toppings = toppings;
  }
  addTopping(topping) {
    this.toppings.push(topping);
  }
}



// In ES6 classes are just a mirage of typical functions and prototypal inheritance, happens under the hood.

// Let's first take a look at how to create a "class" in ES5 code.

function Plane(numEngines) {
  this.numEngines = numEngines;
  this.enginesActive = false;
}

// methods "inherited" by all instances
Plane.prototype.startEngines = function() {
  console.log('starting engines...');
  this.enginesActive = true;
};

const richardsPlane = new Plane(1);
richardsPlane.startEngines();

const jamesPlane = new Plane(4);
jamesPlane.startEngines();



// in ES6

class Plane {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }
  startEngines() {
    console.log('starting engines...');
    this.enginesActive = true;
  }
}

const richardsPlane = new Plane(1);
richardsPlane.startEngines();

const jamesPlane = new Plane(4);
jamesPlane.startEngines();


// 'class' is not magic
  // The 'class' keyword brings with it a lot of mental constructs from other, class-based languages. It doesn't magically add this functionality to JavaScript classes.

// 'class' is a mirage over prototypal inheritance
  // We've said this many times before, but under the hood, a JavaScript class just uses prototypal inheritance.

// Using classes requires the use of new
  // When creating a new instance of a JavaScript class, the new keyword must be used
