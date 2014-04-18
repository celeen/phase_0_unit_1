// I paired [with: Andy Principe] on this challenge.




// Pseudocode
// call the variable secretNumber
// set variable secretNumber equal to a number
// set variable secretNumber equal to 7
// call the variable password
//set variable password equal to a string
//set value of password equal to 'just open the door'
//call boolean allowedIn
//set value of boolean allowedIn to a boolean
//set value of boolean allowed In equal to false
//call variable members
//set value to an array
//set first element in array members equal to 'John'
//set the fourth elemeent of array members equal to 'Mary'
//


// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = "just open the door"
var allowedIn = false
var members = ["John", 28, 1, "Mary"]



// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = new Array();
members.push(28);
members.push(1);
members.unshift("John");
members.push("Mary")
console.log(members[3])
//I tried resetting allowedIn as a function, because that seems like the likely way this kind of code would go- a function that asks for the password and returns false if not entered correctly. But that is asking for more than what the test want. And since there is no broader written goal to accompany the test, I can only assume that this code, which passes, meets expectations.
//So, the only other thing I could think to do is to add to the array after it's created, since the objectives say that we should practice adding objects to an array.


// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// This challenge seemed pretty straightforward. We created variables, and an array. In refactoring, I laid out the array in a longer fashion in order to practice pushing an unshifting- which was good, as the first time I tried, I used shift, wrongly. So, I got some good practice at test driven development, at running the code in terminal and then editing and refactoring.
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

