var writeStars = function(a) {
  if (a == 0 ) {
    console.log(" ");
  } else {
    console.log("*");
    writeStars(a-1);
  }
}

writeStars(9); 
// output of nine * each in a line
