// I "paired" by myself on this challenge.




// Pseudocode
// Run code blindly, reading error messages 
// each cycle and correcting for them in code
// 
// 


// __________________________________________
// Write your code below.
  // "The value of secretNumber should be a number."
    var secretNumber = 4;
  // "The value of secretNumber should be 7."
    secretNumber = 7;
  // "The value of password should be a string."
    var password = "fun with javascript";
  // "The value of password should be 'just open the door'."
    password = "just open the door";
  // "The value of allowedIn should be a boolean."
    var allowedIn = false;  
  // "members instanceof Array / Reference Error:  members is not defined"
    var members = [0, 1, 2, 3, 4];
  // "The first element in the value of members should be 'John'."
    members = ["John", "Paul", "George", "Ringo"];
  // "The fourth element in the value of members should be 'Mary'."
    members = ["John", "Paul", "George", "Mary"];





// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
    var secretNumber = 7;
    var password = "just open the door";
    var allowedIn = false;
    var members = ["John", "Paul", "George", "Mary"];




// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
/*I found the coding part quite easy, and it took about the length of time it should to accomplish 
what it taught.  (In contrast, I thought the Code Combat assignment took forever just to get you 
comfortable with a few basic JavaScript syntax comments—I spent over an hour on it!).  Here, I 
spent about 10 minutes getting comfortable with JS syntax: semicolons at the ends of lines, 
declaring variables, etc.  The assignment really helped remind me of my Ruby knowledge (it’s been 
a few weeks now!) and impress on me how most of the same basic concepts are available in JS.

In addition to the 10 minutes I spent coding, however, I also spent about 25 minutes trying to 
figure out how to run my code in node.js.  I was frustrated that the instructions really just 
referred to this option in passing, without any explicit explanation of the (really super easy) 
process of running the code itself.  I spent some time googling the answer as well, but nearly 
all of what I found was much more complex than anything I was looking for.*/

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

