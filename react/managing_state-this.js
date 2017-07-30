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

// Example
  var me = {
    name: 'Tyler',
    age: 25,
    sayName; function() {
      console.log(this.name);
    }
  };
  me.sayName(); // Tyler
  // when you call a function and the function is invoked, what is left from the dot is the reference

// another example
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


// another example
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


