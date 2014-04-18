// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.

create a variable named adam

2. Give adam a name property with the value "Adam".

adam's nbame set equal to "Adam"

3. Add a spouse property to terah and assign it the value of adam.

terah's spouse set equal to adam

4. Change the value of the terah weight property to 125.

terah's weight property set equal to 125

5. Remove the eyeColor property from terah.

delete terah's eyeColor

6. Add a spouse property to adam and assign it the value of terah.

adam's spouse set equal to terah

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

   terah's children set equal to a new object with no properties

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

  terah's children's carson property set equal to object with no value;
  terah's children's carson's name property set equal to "Carson"

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

  terah's children's carter property set equal to object with no value;
  terah's children's carter's name property set equal to "Carter"

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

  terah's children's colton property set equal to object with no value;
  terah's children's colton's name property set equal to "Colton"

11. Add a children property to adam and assign it the value of terah children.
    adam's children property set equal to terah's children property

*/

// __________________________________________
// Write your code below.
var adam = {};
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = {};
terah.children.carson = {};
terah.children.carson.name = "Carson";
terah.children.carter = {};
terah.children.carter.name = "Carter";
terah.children.colton = {};
terah.children.colton.name = "Colton";
adam.children = terah.children;







// __________________________________________
// Reflection: Use the reflection guidelines
// 
// I got mixed up in the terah's children section; I first thought that terah's children preoprty was supposed to contain a property names carson whose value was "Carson". I missed the "name" property and the second embedded object entirely! Then I refactored my pseudo code and the code, and couldn't figure out why it wasn't working... it was because I had copied and pasted the first chilren's property instructions without changing the name from carson! Doh!
// 
// This was a very useful exercise in visualizing Javascript objects. Also, objectification carries new meaning.
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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)