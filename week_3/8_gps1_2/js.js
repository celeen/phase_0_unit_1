// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Zach Pflederer
//  2.Celeen Rusk


// 1. "YOU SIGNED... WHO?!"

var louis = {
    name: "Louis C.K.",
    age: "divorced and 40",
    quote: "It has to go to space and back!"
};

var eddie = {};

eddie.name = "Eddie Izzard";
eddie.age = "timeless";
eddie.quote = "I'm an evil giraffe!";

// 2. "Here they Come!"
// var client = function(name, age, quote){
//   this.name = name;
//   this.age = age;
//   this.quote= quote;
// }

function Client(name,age,quote){
    this.name = name;
    this.age = age;
    this.quote = quote;
};

var adam = new Client("Adam Sandler", 47, "That's your home, are you too good for your home?");
var kristen = new Client("Kristen Bell", 33, "Do you want to build a snowman?");
var jim = new Client("Jim Carrey", 52, "...so you're telling me there's a chance!? Yeah!");




// 3. "TIME IS MONEY!"

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 4. "SHOW 'EM OFF!"

var array = [louis, eddie, adam, kristen, jim, shooterMcGavin];

for (var i = 0; i < array.length; i++) {
    var actor = array[i];
    console.log("We have " + actor.name + ", who is " + actor.age + ", and is known for saying '" actor.quote + "'.");
}