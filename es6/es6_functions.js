// Arrow functions

    const upperizedNames = ['Farrin','Kagure','Asser'].map(function(name) {
        return name.toUpperCase();
    })

    // as an arrow function

    const upperizedNames = ['Farrin','Kagure','Asser'].map( name => name.toUpperCase());


    // Arrow functions are always function EXPRESSIONS

    const greet = name => `Hello ${name}!`;
    // or
    const greet = function(name) {
        return `Hello ${name}`;
    }

    greet('Paul');
    // both return Hello Paul


    // Without parameter list
    const sayHi = () => console.log('Hello!');
    // or
    const sayHi = function() {
        console.log('Hello!');
    }

    // Now with multiple
    const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
    orderIceCream('chocolate', 'waffle');



    // Concise and block body syntax
        // Concise
        // automatically returns the expression, no curly brackets
        const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
          name => name.toUpperCase()
        );

        // curly brackets wrap the body, return NEEDS to be used
        const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
            name = name.toUpperCase();
            return `${name} has ${name.length} characters in their name`;
        });


    // Default Function parameters

    function greet(name, greeting) {
      name = (typeof name !== 'undefined') ?  name : 'Student';
      greeting = (typeof greeting !== 'undefined') ?  greeting : 'Welcome';

      return `${greeting} ${name}!`;
    }

    greet(); // Welcome Student!
    greet('James'); // Welcome James!
    greet('Richard', 'Howdy'); // Howdy Richard!

    // Better way to rewrite this

        function greet( name = 'Student', greeting = 'Welcome') {
            return `${greeting} ${name}!`;
        }

        greet(); // Welcome Student!
        greet('James'); // Welcome James!
        greet('Richard','Howdy'); // Howdy Richard!



            // Defaults and desctructuring arrays
                function createGrid([width = 5, height = 5]) {
                  return `Generates a ${width} x ${height} grid`;
                }

                createGrid([]); // Generates a 5 x 5 grid
                createGrid([2]); // Generates a 2 x 5 grid
                createGrid([2, 3]); // Generates a 2 x 3 grid
                createGrid([undefined, 3]); // Generates a 5 x 3 grid


            //
            function houseDescriptor([houseColor = 'green', shutterColors = ['red']]) {
                return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
            }

            houseDescriptor(['green',['white','gray','pink']]); //


            // Defaults and destructuring objects
                function createSundae({scoops = 1, toppings = ['Hot Fudge']}) {
                  const scoopText = scoops === 1 ? 'scoop' : 'scoops';
                  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
                }

                createSundae({}); // Your sundae has 1 scoop with Hot Fudge toppings.
                createSundae({scoops: 2}); // Your sundae has 2 scoops with Hot Fudge toppings.
                createSundae({scoops: 2, toppings: ['Sprinkles']}); // Your sundae has 2 scoops with Sprinkles toppings.
                createSundae({toppings: ['Cookie Dough']}); // Your sundae has 1 scoop with Cookie Dough toppings.




