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
rapunzel.hair = {}
rapunzel.hair.climbable = 49;
rapunzel.location = (2,8);
rapunzel.elevation = 50;


var moveUp = function(){tharin.location = ( x ,y + 1);
}
var moveRight = function(){tharin.location = (x + 1, y)};
var climb = function(x) {
	if (x.climbable + this.elevation >= x.elevation){
		this.elevation = x.elevation
}





// Refactored Code
var tharin = {location:(0,0), elevation: 1, type: moveable};

var tower = {height: 50, locationx: 2, locationy: 8, climbable: 0, type: static};

var rapunzel = 
{   locationx: 2, 
	locationy:8, 
	elevation: 50, 
	type: static,
	hair: 
	{ climbable: 49 }}
var moveUp = function(){tharin.locationy += 1};
}
var moveRight = function(){tharin.locationx += 1};
var climb = function(x) {
	if (x.climbable + tharin.elevation >= x.elevation){this.elevation = x.elevation}
};





// Reflection
// In my prep, I kept making tihs exercise harder than I needed to/should have. I would rather do it and get the right syntax and logic than choose a course over my head and fib some aspects of it. I settled on rapunzel early on thinking it would be cute, but couldn't decide which functions were necessary, or how to have the objects interact. Should tharin call our to rapunzel to let her hair down? How would I measure that? Would I need to create a function then that causes rapunzel to let her hair down? How do I measure THAT? I decide to stick with simple for now, and I still learned a lot. All the parameters that must go into making an actual working game, or app! Especially one of this type, where characters interact...
// 
// 
// 
// 
// 
// 
// 