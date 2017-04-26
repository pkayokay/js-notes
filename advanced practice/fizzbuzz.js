for (var n = 1; n <= 50; n++) {
  var output = "";
  if (n % 3 == 0)
    output = output + "Fizz";
  if (n % 5 == 0)
    output = output + "Buzz";
  console.log(output || n);
}

or

for (var n = 1; n <= 50; n++) {
    var output = "";
    if (n % 3 == 0 && n % 5 == 0) {
        console.log("FizzBuzz");
    } else if (n % 5 == 0 ) {
        console.log("Buzz");
    } else if (n % 3 == 0 ) { 
    console.log("Fizz");
    } else {
        console.log(n);
    }
}