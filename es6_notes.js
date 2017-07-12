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

  //

  const point = [10,25,-34];
  const [x,y,z] = point;
  console.log(x,y,z);












