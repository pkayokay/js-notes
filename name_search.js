/*jshint multistr:true */

var text = "Amazing Paul cool man";

var myName = "Paul";
var hits = [];


for (var i = 0; i <= text.length; i = i + 1) {

    if (text[i] === myName[0]) {
        for (var j = i; j < i + myName.length; j = j + 1) {
          if (text[j] === myName[j - i]) {
            hits.push(text[j]);
          }
        }
    }
    
}

if (hits.length > 1) {
  console.log(hits);
} else {
  console.log("Name Not here");
}