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
// NOTE THAT I DID TWO ROUNDS OF PSEUDO CODE--GENERALLY, I THINK MY SECOND ONE IS BETTER, AS
// IT DOESN'T MERELY RESTATE THE CHALLENGE, BUT INSTEAD, FOCUSES ON TRANSLATING THE CHALLENGE
// INTO CODE 

1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
// Create Adam object with no properties
// Create adam object


2. Give adam a name property with the value "Adam".
// Give adam object name of Adam
// Name adam object


3. Add a spouse property to terah and assign it the value of adam.
// Assign adam object to terah object's newly created spouse property
// Link adam to terah via new spouse property for terah

4. Change the value of the terah weight property to 125.
// Reassign terah object's weight property to 125
// Update terah's weight to 125

5. Remove the eyeColor property from terah.
// Delete terah object's eyeColor property
// Delete terah's eyeColor property

6. Add a spouse property to adam and assign it the value of terah.
// Assign terah object to adam object's newly created spouse property
// Link terah to adam via new spouse property for adam

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
// Give terah object an empty children property

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
// Add to terah's children property a new object carson with appropriate name value
// Add carson object (name it) to terah's children property

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
// Add to terah's children property a new object carter with appropriate name value
// Add carter object (name it) to terah's children property

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
// Add to terah's children property a new object colton with appropriate name value
// Add colton object (name it) to terah's children property

11. Add a children property to adam and assign it the value of terah children.
// Assign adam object's newly created children property the same value as terah's


*/

// __________________________________________
// Write your code below.

// Create adam object
    var adam = {}
// Name adam object
    adam.name = "Adam";
// Link adam to terah via new spouse property for terah
    terah.spouse = adam;
// Update terah's weight to 125
    terah.weight = 125;
// Delete terah's eyeColor property
    delete terah.eyeColor;
// Link terah to adam via new spouse property for adam
    terah.spouse.spouse = terah;
// Give terah object an empty children property
    terah.children = {};
// Add carson object (name it) to terah's children property
    terah.children.carson = {name: "Carson"};
// Add carter object (name it) to terah's children property
    terah.children.carter = {name: "Carter"};
// Add colton object (name it) to terah's children property
    terah.children.colton = {name: "Colton"};
// Assign adam object's newly created children property the same value as terah's
    adam.children = terah.children;








// __________________________________________
// Reflection: Use the reflection guidelines
// 
/* I like the nature of test-driven development.  One, I like working through each challenge 
and then letting the code itself tell me what I need to do next.  Two, I think it really 
solidifies my understanding of the concepts in a very quick way: sometimes I look at the test 
code, and other times I just figure it out.  I also like the idea of pair-programming where 
one person writes the code and one person writes the tests.

In general, the concept of objects makes sense to me, though I am sure I will learn more, and 
be much more confused, as I see more complex objects interacting with each other.  

I had some trouble with challenges 7-10: assigning an empty children property and then 
filling in the property with objects.  I used Team Treehouse and Code Academy to take general 
primer courses on JS objects.  I figured out how to do the code through trial and error; I 
was not able to find a resource to help me find a solution to this specific problem.  

I can definitely appreciate the idea that we need pseudocoding to solve even moderately 
complicated problems and thus we need to practice pseudocoding now on easier challenges.  
But it’s frustrating and I fear that my pseudocode is far wordier than I would ever use in a 
real context.  To me, the idea of pseudocode is to create am algorithm’s framework, to tell 
why a line/block of code exists where it does.  But here, with these simple challenges, I 
feel like my pseudocode is more confusing than simply reading the code itself.
*/
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