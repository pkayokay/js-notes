// const and let
  function getClothing(isCold) {
    if (isCold) {
      var freezing = 'Grab a jacket!';
    } else {
      var hot = 'It’s a shorts kind of day.';
      console.log(freezing);
    }
  }

  getClothing(false); // undefined

  ////
  function getClothing(isCold) {
    if (isCold) {
      const freezing = 'Grab a jacket!';
    } else {
      const hot = 'It’s a shorts kind of day.';
      console.log(freezing);
    }
  }
.
  getClothing(false); // Reference error: freezing is not defined.

  ////
  let instructor = 'James';
  instructor = 'Richard';
  console.log(instructor); // Richard




// Concatenation
  // Old Way

  const student = {
    name: 'Richard Kalehoff',
    guardian: 'Mr. Kalehoff'
  };

  const teacher = {
    name: 'Mrs. Wilson',
    room: 'N231'
  }

  let message = student.name + ' please see ' + teacher.name + ' in ' + teacher.room + ' to pick up your report card.';

  // New Way (with template literals)

  let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;



// Destructuring
  // Extracting data from arrays and objects into distinct variables.

  //this is the usual...
  // array
    const point = [10, 25, -34];
    const x = point[0];
    const y = point[1];
    const z = point[2];

    console.log(x,y,z);

    // object
    const gemstone = {
      type: 'quartz',
      color: 'rose',
      karat: 21.29
    }

    const type = gemstone.type;
    const color = gemstone.color;
    const karat = gemstone.karat;

    console.log(type, color, karat);

  // this is  using destructuring
    // array
    const point = [10,25,-34];
    const [x,y,z] = point;
    console.log(x,y,z);

    //
    let names = ['Paul', 'John'];
    let [first,second] = names;

    // object
    const gemstone = {
        type: 'quartz',
        color: 'rose',
        karat: 21.29
    }

    const {type, color, karat} = gemstone;


// Object Literal Shorthand

let type = 'quarts';
let color = 'rose';
let carat = 21.29;

const gemstone = {
    type,
    color,
    carat
}

console.log(gemstone);


// Shorthand method names

// old
let myObject = {
    calculate: function() {...}
}
// new
let myObject = {
    calculate() {...}
}



// Iteration
  // for loop
  const digits = [0,1,2,3];

  for (let i = 0; i < digits.length; i++) {
    console.log(digits[i]);
  }

  // for in loop

  const digits = [0,1,2,3];

  for (const index in digits) {
    console.log(digits[index]);
  }

  // for of loop
  const digits = [0,1,2,3];

  for (const digit of digits) {
    console.log(digit)
  }

  //
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (const digit of digits) {
    if (digit % 2 === 0) {
      continue;
    }
    console.log(digit);
  }

  //
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  for (const day of days) {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    console.log(capitalize(day));
  }

// Spread operator
  // gives the ability to spread iterable objects into multiple elements.
  const books = ['Don Quixote', 'The hobbit', 'Alice in Wonderland', 'Tale of Two Cities'];

  console.log(...books);

  // with sets
  const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  console.log(...primes);

  // combine arrays with concat
  const fruits = ['apples', 'bananas', 'pears'];
  const vegetables = ['corn','potatoes','carrots'];
  const produce = fruits.concat(vegetables);
  console.log(produce);


  /*
   * Instructions: Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.
   */
   // doing const product = [fruits,vegetables] won't work

  const fruits = ["apples", "bananas", "pears"];
  const vegetables = ["corn", "potatoes", "carrots"];

  const produce = [...fruits,...vegetables];

  console.log(produce);


// Rest parameter
  // represent indefinite number of elements as an array
  // opposite of the spread operator

  const order = [20.17, 18.67, 1.50, 'cheese','eggs','milk','bread'];
  const [total, subtotal, tax, ...items] = order;
  console.log(total, subtotal, tax, items);

// Variadic functions
  // take indefinite number of arguments

  function sum() {
    let total = 0;
    for (const argument of arguments) {
      total += argument;
    }
    return total;
  }
  console.log(sum(9,9,9,9)) // 36

  // better way to write this, it avoids confusion about arguments
  function sum(...nums) {
    let total = 0;
    for(const num of nums) {
      total += num;
    }
    return total;
  }
  console.log(sum(9,9,9,9))


  // Test Program

    function average(...nums) {
      let total = 0;
      for (const num of nums) {
        total = (total + num)
      }
      if (nums.length > 0) {
        return total/nums.length;
      } else {
        return 0;
      }
    }

    console.log(average(2, 6));
    console.log(average(2, 3, 3, 5, 7, 10));
    console.log(average(7, 1432, 12, 13, 100));
    console.log(average());



