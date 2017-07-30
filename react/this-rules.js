// 'this' keyword into 4 rules

// 1. Implicit Binding
// 2. Explicit Binding
// 3. New Binding
// 4. window Binding

// Where is this function invoked?
  var sayName = function(name) {
    console.log('Hello ' + name);
  }

  sayName('Tyler');
  // invoking the function, you won't know what 'name' is until the function is invoked


//////////////////////////
//// Implicit Binding ////
//////////////////////////

  var me = {
    name: 'Tyler',
    age: 25,
    sayName; function() {
      console.log(this.name);
    };
  };
  me.sayName(); // Tyler
  // when you call a function and the function is invoked, what is left from the dot is the reference

//
  var sayNameMixin = function(obj) {
    obj.sayName = function() {
      console.log(this.name);
    };
  };

  var me = {
    name: 'Tyler',
    age: 25
  };

  var you = {
    name: 'Joey',
    age: 21
  };

  sayNameMixin(me);
  sayNameMixin(you);

  me.sayName(); // Tyler
  you.sayName(); // Joey


//
  var Person = function(name, age) {
    return {
      name: name,
      age: age,
      sayName: function() {
        console.log(this.name);
      },
      mother: {
        name: 'Stacey',
        sayName: function() {
            console.log(this.name);
        }
      }
    };
  };

  var jim = Person('Jim', 42);
  jim.sayName();
  jim.mother.sayName();


//////////////////////////
//// Explicit Binding ////
//////////////////////////
// call, bind, apply


// call: immediately invoke the function one by one
  var sayName = function() {
    console.log('My name is ' + this.name);
  };

  var stacey = {
    name: 'Stacey',
    age: 34
  };

  sayName.call(stacey);


// apply: immediately invoke the function with an array
  var sayName = function(lang1, lang2, lang3) {
    console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', ' + lang3);
  };

  var stacey = {
    name: 'Stacey',
    age: 34
  };

  var languages = ['JavaScript', 'Ruby', 'Python'];

  sayName.call(stacey, languages[0], languages[1], languages[2]);
  sayName.apply(stacey, languages); // same output .apply parses this for us


// bind: same as .call, but allows you to store this into a brand to function that can be invoked later
  var sayName = function(lang1, lang2, lang3) {
    console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', ' + lang3);
  };

  var stacey = {
    name: 'Stacey',
    age: 34
  };

  var languages = ['JavaScript', 'Ruby', 'Python'];
  var newFn = sayName.bind(stacey, languages[0], languages[1], languages[2]);
  console.log('here');
  newFn();


//////////////////////////
/// 'new' and 'window' ///
//////////////////////////

  // new binding
  // Whenever a function is invoked with a 'new' keyword, the 'this' keyword inside the funciton is bound to the object being constructed

  var Animal = function(color, name, type) {
      // this = {} - an object is created
    this.color = color;
    this.name = name;
    this.type = type;
  };
  var zebra = new Animal('black and white', 'Zorro', 'Zebra');

 // window Binding
  var sayAge = function() {
      console.log(this.age);
  };

  var me = {
      age: 25
  };

  sayAge(); // undefined
  // We are invoking a function without anything to the left of the function,
  // so it's referencing the window object, which does not have an 'age' property

