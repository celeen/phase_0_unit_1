// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
//Rescue Mission


//Grab the Mushroom
//pseudocode:
//after line 3
//move right
//move left
//attack nearby enemy

this.moveUp();
this.moveRight(); 
this.moveLeft();
this.moveUp();

this.attackNearbyEnemy();

//Drink me
//attack munchin#1
//move right
//move down
//move up
//move right
//attack nearby enemy

this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//Taunt The Guards
//all the given code, plus:
//move right
//move right
//move up
//move right
//say something
//move down
// move right
// move up
// move right

this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("OVER HERE!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

//IT's a Trap!
//move down
//say something
//move up

this.moveDown();
this.moveDown();
this.say("anything");
this.moveUp();
this.moveUp();

//Taunt
//say something
//say something
//say something
//say something

this.say("Hey Fattie!");
this.say("I heard your mother was british!");
this.say("BOOYAH");
this.say("fartface!");

//Cowardly Taunt
//move out from between arrow towers
//yell something
//move back in

this.moveXY(54, 25);
this.say("HEY FARTFACE");
this.moveXY(71, 12);

//Commanding Followers
//say follow me
//say attack

this.say("Follow me!");
this.moveXY(66,50)
this.say("Attack!");

//Mobile Artillery
//move up toward top left group
// attack ogre in range (48,64)
//attack that big on again
//attack the second group
//attack them again

this.moveXY(43,41);
this.attackXY(48,64);
this.attackXY(45,50);
this.attackXY(68,52);
this.attackXY(56,47);

 
 
 
 
 
// Reflection:
// Write your reflection here.

//What is this referring to? Think programming-wise rather than in the terms of the game.
//It seems to be referring to the object at hand. this.dosomething says, do something with/to "this"
//What does the () do in JavaScript?
//it feeds parameters into the method we are calling on the initial object. It tells the part after the . what its adverb is, essentially.
//What is the point of the semicolons?
//To indicate the end of a thought. It's kind of like a period in English, is my understanding.