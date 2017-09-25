// let and const - closure is in the scope of the block, not the function. var hoisted in the scope of the funciton

// Template literals

// Desctructuring

  // array
  const point = [1,2,3]
  const [x,y,z] = point // const x = point[0]

  const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

  const [one, a, b, two, c, d, e, three, f] = things;
  const colors = `List of Colors
  1. ${one}
  2. ${two}
  3. ${three}`


  // object
  const gemstone = {
    type: 'quartz',
    color: 'rose',
    karat: 21
  }

  const {type, color, karat} = gemstone // const type = gemstone.type


// Object literal shorthand

  // Old way

  let type = 'quartz'
  let color = 'rose'
  let carat = 21

  const gemstone = {
    type: type,
    color: color,
    carat: carat
  }

  // New way

  const gemstone = { type, color, carat }


  // Shorthand method names

  let gemstone = {
    type,
    color,
    carat,
    calculateWorth() {
      ...
    }
  }


// Iteration

  const digits = [0,1,2,3]

  // uses index
  for (const index in digits) {
    console.log(digits[index])
  }

  // no index
  for (const digit of digits) {
    console.log(digit)
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

  const books = ['book 1', 'book 2', 'book 3']
  console.log(...books)


  //

  const fruits = ["apples", "bananas", "pears"];
  const vegetables = ["corn", "potatoes", "carrots"];

  const produce = [fruits, vegetables] // this does not work
  const produce = [...fruits,...vegetables];

  console.log(produce);


// Rest parameter: the three ... allow you to represent an indefinite number of elements as an array.

  const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
  const [total, subtotal, tax, ...items] = order;
  console.log(total, subtotal, tax, items); //  20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]

// Variadic functions: functions that take an indefinite number of arguments

  function sum() {
    let total = 0;
    for(const argument of arguments) {
      total += argument
    }
    return total;
  }

  sum(1,1) // 2
  sum(1,1,1) //3

  // rewritten for clarity
  function sum(...sums) {
    let total = 0;
    for(const num of nums) {
      total += num;
    }
    return total;
  }

  //
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
