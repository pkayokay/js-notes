// JAVASCRIPT NOTES

--------------------------------------------
/////////////Creating Objects///////////////
--------------------------------------------

//  1. Object Literal Notation
    
    var car = {
      model: "Honda Civic",
      year: 1999
    };

//  2. Object Constructor 

    var car = new Object();
    car.model = "Honda Civic";
    car.year = 1999;

//  3. Custom constructors

    function Person(name,age) {
      this.name = name;
      this.age = age;
    }

    // Let's make bob and susan again, using our constructor
    var bob = new Person("Bob Smith", 30);
    var susan = new Person("Susan Jordan", 25);
    // help us make george, whose name is "George Washington" and age is 275

    var george = new Person("George Washington", 275); 

////////////////////////////////////////////

    function Person(name,age) {
      this.name = name;
      this.age = age;
      this.species = "Homo Sapiens";
    }

    var sally = new Person('Sally Bowles', 39);
    var holden = new Person('Holden Caulfield', 16);
    console.log("sally's species is " + sally.species + " and she is " + sally.age );
    console.log("holden's species is " + holden.species + " and he is " + holden.age );

--------------------------------------------
//////////Properties of an Object///////////
--------------------------------------------

//  Dot Notation
    var car = {
      model: "Honda Civic",
      year: 1999
    };

    car.model = "Honda Accord"; // Accord is now the model
    var a = car.model // a is now the model

// Bracket Notation
    var car = {
      model: "Honda Civic",
      year: 1999
    };

    car["model"] = "Honda Accord"; // Accord is now the model
    var a = car["model"] // a is now the model

--------------------------------------------
///////////////Methods//////////////////////
--------------------------------------------

//  Methods: a function associate with an object. Methods have to be called with the associated object

    var square = new Object();
    square.sideLength = 6;
    square.calcPerimeter = function() {
      return this.sideLength * 4;
    };
    // help us define an area method here

    square.calcArea = function() {
    return this.sideLength * this.sideLength;  
    };

    var p = square.calcPerimeter();
    var a = square.calcArea();

    console.log("The perimeter is " + p);
    console.log("The area is " + a);

////////////////////////////////////////////

    var rectangle = new Object();
    rectangle.height = 3;
    rectangle.width = 4;
// here is our method to set the height
    rectangle.setHeight = function (newHeight) {
      this.height = newHeight;
    };
// help by finishing this method
    rectangle.setWidth = function(newWidth) {
        this.width = newWidth;    
    };
      
// here change the width to 8 and height to 6 using our new methods

    rectangle.setHeight(6);
    rectangle.setWidth(8);

////////////////////////////////////////////

// here we define our method using "this", before we even introduce bob
    var setAge = function (newAge) {
      this.age = newAge;
    };
// now we make bob
    var bob = new Object();
    bob.age = 30;
    bob.setAge = setAge;
  
// make susan here, and first give her an age of 25

    var susan = new Object();
    susan.age = 25;
    var a = susan.age;

// here, update Susan's age to 35 using the method

    susan.setAge = setAge;
    susan.setAge(35);
    var b = susan.age;

    console.log("10 years passed from " + a + " to " + b);

////////////////////////////////////////////

// Literal notation with methods

  var james = {
      job: "programmer",
      married: false,
      speak: function(n) {
          console.log("Hello, I am feeling" + n);
      }
  };

  james.speak("great");
  james.speak("just okay");

--------------------------------------------
///////////Constructor with Methods/////////
--------------------------------------------

    function Rectangle(height, width) {
      this.height = height;
      this.width = width;
      this.calcArea = function() {
          return this.height * this.width;
      };
      // put our perimeter function here!
      this.calcPerimeter = function() {
            return (this.height * 2) + (this.width * 2)   
      }
    }

    var rex = new Rectangle(7,3);
    var area = rex.calcArea();
    var perimeter = rex.calcPerimeter();

////////////////////////////////////////////

    function Rabbit(adjective) {
        this.adjective = adjective;
        this.describeMyself = function() {
            console.log("I am a " + this.adjective + " rabbit");
        };
    }

    // now we can easily make all of our rabbits

    var rabbit1 = new Rabbit("fluffy");
    var rabbit2 = new Rabbit("happy");
    var rabbit3 = new Rabbit("sleepy");


    rabbit1.describeMyself();
    rabbit2.describeMyself();
    rabbit3.describeMyself();

--------------------------------------------
//////////////Array of Objects//////////////
--------------------------------------------

    function Person (name, age) {
        this.name = name;
        this.age = age;
    }

    // We can make a function which takes persons as arguments
    // This one computes the difference in ages between two people
    var ageDifference = function(person1, person2) {
        return person1.age - person2.age;
    };

    // Make a new function, olderAge, to return the age of
    // the older of two people

    var olderAge = function(person1, person2 ) {
        if (person1.age > person2.age) {
            return person1.age;   
        } else {
            return person2.age;   
        }
    };

    // Let's bring back alice and billy to test our new function
    var alice = new Person("Alice", 30);
    var billy = new Person("Billy", 25);

    console.log("The older person is " + olderAge(alice, billy));

////////////////////////////////////////////

function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
        
    };
    // define a perimeter method here
    this.perimeter = function() {
        return 2 * Math.PI * this.radius;
    }
};

--------------------------------------------
////////////////For-in loops///////////////
--------------------------------------------

    var nyc = {
        fullName: "New York City",
        mayor: "Bill de Blasio",
        population: 8000000,
        boroughs: 5
    };

    // write a for-in loop to print the value of nyc's properties


    for(var x in nyc) {
        console.log(nyc[x]);
    }

--------------------------------------------
///////////Prototypes////////////////////
--------------------------------------------

    function Dog (breed) {
      this.breed = breed;
    };

    // here we make buddy and teach him how to bark
    var buddy = new Dog("golden Retriever");
    Dog.prototype.bark = function() {
      console.log("Woof");
    };
    buddy.bark();

    // here we make snoopy
    var snoopy = new Dog("Beagle");
    /// this time it works!
    snoopy.bark();

//////////////////////////////////

    function Cat(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    // let's make some cats!
    var cheshire = new Cat("Cheshire Cat", "British Shorthair");
    var gary = new Cat("Gary", "Domestic Shorthair");

    // add a method "meow" to the Cat class that will allow
    // all cats to print "Meow!" to the console

    Cat.prototype.meow = function() {
        console.log("Meow!");
    }

    // add code here to make the cats meow!
    cheshire.meow();
    gary.meow();

//////////////////////////////////////

    var languages = {
        english: "Hello!",
        french: "Bonjour!",
        notALanguage: 4,
        spanish: "Hola!"
    };

    // print hello in the 3 different languages
    for(var x in languages) {
        var n = languages[x];
        if (typeof n === "string") {
        console.log(n);
        }
    }

--------------------------------------------
////////Prototypes and Inheritance//////////
--------------------------------------------

// create your Animal class here
    function Animal(name, numLegs) {
        this.name = name;
        this.numLegs = numLegs;
    }


    // create the sayName method for Animal
    Animal.prototype.sayName = function() {
        console.log("Hi my name is " + this.name);
    }

    // provided code to test above constructor and method
    var penguin = new Animal("Captain Cook", 2);
    penguin.sayName();

////////////////////////////////////////////

    function Animal(name, numLegs) {
        this.name = name;
        this.numLegs = numLegs;
    }
    Animal.prototype.sayName = function() {
        console.log("Hi my name is " + this.name);
    };


    // create a Penguin constructor here

    function Penguin(name, numLegs) {
        this.name = name;
        this.numLegs = numLegs;
    }
    // create a sayName method for Penguins here
    var Penguin = Animal;

    // our test code
    var theCaptain = new Penguin("Captain Cook", 2);
    theCaptain.sayName();

////////////////////////////////////////////

// the original Animal class and sayName method
    function Animal(name, numLegs) {
        this.name = name;
        this.numLegs = numLegs;
    }
    Animal.prototype.sayName = function() {
        console.log("Hi my name is " + this.name);
    };

    // define a Penguin class

    function Penguin(name, numLegs) {
        this.name = name;
        this.numLegs = 2;
    }

    // set its prototype to be a new instance of Animal

    Penguin.prototype =  new Animal();
    // This means that Penguin inherits properties and methods from Animal.

////////////////////////////////////////////

    // the original Animal class and sayName method
    function Animal(name, numLegs) {
        this.name = name;
        this.numLegs = numLegs;
    }
    Animal.prototype.sayName = function() {
        console.log("Hi my name is " + this.name);
    };

    // define a Penguin class

    function Penguin(name, numLegs) {
        this.name = name;
        this.numLegs = 2;
    }

    // set its prototype to be a new instance of Animal

    Penguin.prototype =  new Animal();
    var penguin = new Penguin("Paul");
    penguin.sayName();


////////////////////////////////////////////
    // original classes
    function Animal(name, numLegs) {
        this.name = name;
        this.numLegs = numLegs;
        this.isAlive = true;
    }
    function Penguin(name) {
        this.name = name;
        this.numLegs = 2;
    }
    function Emperor(name) {
        this.name = name;
        this.saying = "Waddle waddle";
    }

    // set up the prototype chain
    Penguin.prototype = new Animal();
    Emperor.prototype = new Penguin();

    var myEmperor = new Emperor("Jules");

    console.log(myEmperor.saying); // should print "Waddle waddle"
    console.log(myEmperor.numLegs); // should print 2
    console.log(myEmperor.isAlive); // should print true

/////////////////////////////////////////////

    function Dog (breed) {
        this.breed = breed;
    };

    // add the sayHello method to the Dog class 
    // so all dogs now can say hello
    Dog.prototype.sayHello = function() {
        console.log("Hello this is a " + this.breed + " dog");
    }
        
    var yourDog = new Dog("golden retriever");
    yourDog.sayHello();

    var myDog = new Dog("dachshund");
    myDog.sayHello();

////////////////////////////////////////////

// what is this "Object.prototype" anyway...?
    var prototypeType = typeof Object.prototype;
    console.log(prototypeType); // logs object

    // now let's examine it!
    var hasOwn = Object.prototype.hasOwnProperty('hasOwnProperty');
    console.log(hasOwn); //logs true

--------------------------------------------
///////////////PRIVATE ACCESS //////////////
--------------------------------------------

//  Accessing private variables in a class 

    function Person(first,last,age) {
       this.firstname = first;
       this.lastname = last;
       this.age = age;
       var bankBalance = 7500;
      
       this.getBalance = function() {
          // your code should return the bankBalance
          return bankBalance;
       };
    }

    var john = new Person('John','Smith',30);
    console.log(john.bankBalance); // not accessible... has to be returned.

    // create a new variable myBalance that calls getBalance()

    var myBalance = john.getBalance();
    console.log(myBalance);

// Private methods

    function Person(first,last,age) {
       this.firstname = first;
       this.lastname = last;
       this.age = age;
       var bankBalance = 7500;
      
       var returnBalance = function() {
          return bankBalance;
       };
           
       this.askTeller = function () {
            return returnBalance;
       }
    }

    var john = new Person('John','Smith',30);
    console.log(john.returnBalance);
    var myBalanceMethod = john.askTeller();
    var myBalance = myBalanceMethod();
    console.log(myBalance);

//

    function StudentReport() {
        var grade1 = 4;
        var grade2 = 2;
        var grade3 = 1;
        this.getGPA = function() {
            return (grade1 + grade2 + grade3) / 3;
        };
    }

    var myStudentReport = new StudentReport();

    for(var x in myStudentReport) {
        if(typeof myStudentReport[x] !== "function") {
            console.log("Muahaha! " + myStudentReport[x]);
        }
    }

    console.log("Your overall GPA is " + myStudentReport.getGPA());


// Passing arguments and private methods in a class

    function Person(first,last,age) {
       this.firstname = first;
       this.lastname = last;
       this.age = age;
       var bankBalance = 7500;
      
       this.askTeller = function(pass) {
         if (pass == 1234) return bankBalance;
         else return "Wrong password.";
       };
    }

    var john = new Person('John','Smith',30);
    /* the variable myBalance should access askTeller()
       with a password as an argument  */
    var myBalance = john.askTeller(1234);

--------------------------------------------
///////////////Switch Statements////////////
--------------------------------------------

    function sequentialSizes(val) {
      var answer = "";
      // Only change code below this line
      switch (val) {
        case 1:
        case 2:
        case 3:
          answer = "Low";
          break;
        case 4:
        case 5:
        case 6:
          answer = "Mid";
          break;
        case 7:
        case 8:
        case 9:
          answer = "High";
          break;
      }  
      
      // Only change code above this line  
      return answer;  
    }

    // Change this value to test
    sequentialSizes(1);

    //

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      return "apple";
      break;
    case "b":
      return "bird";
      break;
    case "c":
      return "cat";
      break;
    default:
      return "stuff"; 
  }
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
switchOfStuff(1);

--------------------------------------------
///////////////Nested Loops ////////////////
--------------------------------------------

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product  *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);



