
var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = move;
    return obj;
};

var move = function() {
    this.loc++;
};

var amy = carlike({}, 1);
// amy.move(); adds 1 to the loc
var ben = carlike({}, 9);
// ben.move();


console.log(amy.loc) // prints the location which is 1


//refactor


var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = function() {
        obj.loc++;
    };
    return obj;
};


var amy = carlike({}, 1);
// amy.move(); adds 1 to the loc
var ben = carlike({}, 9);
// ben.move();


console.log(amy.loc) // prints the location which is 1
