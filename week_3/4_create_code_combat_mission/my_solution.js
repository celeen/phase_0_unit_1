// I worked [myself] on this challenge

// Your mission description:
// Rapunzel is in her tower, which is located 8m east and 2m north of the opening to a clearing in the woods. Her tower is 50m high, and her hair is 49m  long. Tharin enters the clearing at its entrance, (0,0). He must walk to the tower, and climb her hair.
// 
// 

// Pseudocode
// create an object, Tharin.
// give tharin a startingLocation property of (0,0), and a height property of 1m.
// create an object tower
// give tower a height property of 50m, a location property of (2,8), and a climbable property set to 0.
// create an object rapunzel.
// give rapunzel a climbableHair property of 49m, and a location property of (2,8), and a height peroprty 50m
// create a function moveUp that moves tharin 1m north (up).
// create a function moveRight that moves Tharin 1m east (right).
// create a function callOut which adds the value of rapunzel's climbableHair property to the tower's climbable property.
// create a function climb which allows Tharin to climb anything when the tools are available that, including his own height, equal the height of the object.

// Initial Code
var tharin = {}
tharin.location = (0,0);
tharin.elevation = 1;

var tower = {}
tower.height = 50;
tower.location = (2,8);
tower.climbable = 0;

var rapunzel = {}
rapunzel.climbableHair = 49;
rapunzel.location = (2,8);
rapunzel.elevation = 50;


var moveUp = function(){tharin.location = ( x ,y + 1);
}
var moveRight = function(){tharin.location = (x + 1, y)};
var climb = function() {
	if
}





// Refactored Code






// Reflection
// 
// 
// 
// 
// 
// 
// 
// 