<<<<<<< HEAD
// I worked by myself on this challenge

// Your mission description:
// Tharin and the princess are at two opposite ends of the map.
// As Tharin runs toward the princess, two ogres run toward Tharin from opposite directions.
// How will Tharin rescue the princess?

// Pseudocode



// CREATE BOARD SPACE
    // SET BOARD DIMENSIONS
    // CREATE FUNCTION TO PRINT OUT BOARD
        // for each row in the board, print a string representing that part of the board

    // CREATE A FUNCTION TO CONCATENATE EACH ROW INTO A STRING OF THAT ROW's COLUMNS
        // Create an empty string as a starting point
        // For each spot in the rowString, determine if any/many/no character belongs in the spot
            // Create a variable to hold the character value the single space will get
            // Create a variable to count number of characters in the spot
            // Search to see how many and which character is in the row/col space
            // for each of the characters, check to see if their location matches the spot being searched
                    // if a match, then put that character's representation_character in the spot
                    // NOTE: this may override another character
                    // if a match, then also increment the number-of-matches variable
                    // No else statement needed--handl non-matches separately
            // If multiple characters are in the space, the "Fill Character" gets a dummy (2X)
            // If no characters are in the space, the "Fill Character" gets a blank
        // Add most recently determined spot to the rowString
        // Return final rowString to PrintBoard() function

// SET UP EMPTY CHARACTERS ARRAY

// CREATE CHARACTER PROTOTYPE(CLASS?) WITH PROPERTIES AND MOVEMENT FUNCTIONS
    // Set character properties
    // Add character to arrach of characters
    // Set up character movement functions (up, right, down,left)

// GAME ACTION:

// STEP 0:  Place initial characters
// STEP 1:  Tharin moves up, and ogres move inward
// STEP 2:  Tharin moves up, and ogres move inward again
// STEP 3:  Tharin moves up, and ogres move inward again
// STEP 4: Ogres collide and collapse (change ogre appearance to show them out of play.)
// STEP 5:  Mission Accomplished!


=======
// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.  Alan FLorendo
//  2.  Julius Jung

>>>>>>> ec7a16c7d68b599d0237170c267007391058aa01

// 1. "YOU SIGNED... WHO?!"
//Meryl Streep



<<<<<<< HEAD
// CREATE BOARD SPACE

    // SET BOARD DIMENSIONS
    var BOARD_ROWS = 15;
    var BOARD_COLS = 15;

    // CREATE FUNCTION TO PRINT OUT BOARD
    function printBoard() {
        // for each row in the board, print a string representing that part of the board
        for (var rowNum=0; rowNum<BOARD_ROWS; rowNum++) {
            console.log(createRowString(rowNum));
        }
    }



    // CREATE A FUNCTION TO CONCATENATE EACH ROW INTO A STRING OF THAT ROW's COLUMNS
    function createRowString(row) {
        // Create an empty string as a starting point
        var rowString = "";
        // For each spot in the rowString, determine if any/many/no character belongs in the spot
        for (var col=0; col<BOARD_COLS; col++) {
            // Create a variable to hold the character value the single space will get
            fillChar = "";
            // Create a variable to count number of characters in the spot
            numMatches = 0;
            // Search to see how many and which character is in the row/col space
            // for each of the characters, check to see if their location matches the spot being searched
            for (var charNum=0; charNum<characters.length; charNum++) {
                if ((characters[charNum].row === row) && (characters[charNum].col === col))
                {
                    // if a match, then put that character's representation_character in the spot
                    // NOTE: this may override another character
                    fillChar = characters[charNum].rep_char;
                    // if a match, then also increment the number-of-matches variable
                    numMatches++;
                    // No else statement needed--handl non-matches separately
                }
            }
            // If multiple characters are in the space, the "Fill Character" gets a dummy (2X)
            if (numMatches > 1)
            {
                fillChar = "2X";
            }
            // If no characters are in the space, the "Fill Character" gets a blank
            else if (numMatches === 0)
            {
                fillChar = "_ ";
            }
        // Add most recently determined spot to the rowString
        rowString += fillChar;

        }
        // Return final rowString to PrintBoard() function
        return rowString;
    }   // end function 

// SET UP EMPTY CHARACTERS ARRAY
var characters = new Array;

// CREATE CHARACTER PROTOTYPE(CLASS?) WITH PROPERTIES AND MOVEMENT FUNCTIONS
function Char( charName, row, col, rep_char ) {
    // Set character properties
    this.name = charName;
    this.row = row;
    this.col = col;
    this.rep_char = rep_char;

    // Add character to arrach of characters
    characters[characters.length] = this;

    // Set up character movement functions (up, right, down,left)
    this.goUp = function(distance) {
        this.row -= distance;
    };

    this.goDown = function(distance) {
        this.row += distance;
    };

    this.goLeft = function(distance) {
        this.col -= distance;
    };

    this.goRight = function(distance) {
        this.col += distance;
    };

}  // ends create character shell object


// GAME ACTION:

// STEP 0:  Place initial characters
var tharin = new Char("Tharin", 11, 4, "Th");
var ogre1 = new Char ("Ogre 1", 7, 8, "O1");
var ogre2 = new Char ("Ogre 2", 7, 1, "O2");
var princess = new Char ("Princess", 4, 4, "Pr");

// STEP 1:  Tharin moves up, and ogres move inward
console.log("\nStart of Play");
printBoard();
console.log("Tharin moves up 1 step toward the princess.");
tharin.goUp(1);
console.log("Each ogre moves inward 1 step.");
ogre1.goLeft(1);
ogre2.goRight(1);
printBoard();

// STEP 2:  Tharin moves up, and ogres move inward again
console.log("\nTharin moves up 1 step toward the princess.");
tharin.goUp(1);
console.log("Each ogre moves inward 1 step.");
ogre1.goLeft(1);
ogre2.goRight(1);
printBoard();

// STEP 3:  Tharin moves up, and ogres move inward again
console.log("\nTharin moves up 1 step toward the princess.");
tharin.goUp(1);
console.log("Each ogre moves inward 1 step.");
ogre1.goLeft(1);
ogre2.goRight(1);
printBoard();

// STEP 4: Ogres collide and collapse (change ogre appearance to show them out of play.)
console.log("\nOgres are running so fast, they hit each other, and collapse back, dead.  Tharin pauses to laugh.");
ogre1.goRight(1);
ogre2.goLeft(1);
ogre1.rep_char = "XX";
ogre2.rep_char = "XX";
printBoard();

// STEP 5:  Mission Accomplished!
console.log("\nTharin moves up 3 spaces toward the princess.");
tharin.goUp(3);
printBoard();
console.log('Tharin says, "I have rescued you."');
console.log('Princess says, "Bullshit!!  I saw what happened!"');


=======
// 2. "Here they Come!"
var actor1 = {
    name: "Adam Sandler",
    age: 47,
    quote: "That's your home!  Are you too good for your home?!"
}
>>>>>>> ec7a16c7d68b599d0237170c267007391058aa01

var actor2 = {
    name: "Kristen Bell",
    age: 33,
    quote: "Do you wanna build a snowman?"
}

var actor3 = {
    name: "Jim Carrey",
    age: 52,
    quote: "...So you're telling me there's a chance? YEAH!"
}

<<<<<<< HEAD
// Refactored Code
// MAIN CHANGES:  (1) created function for Generic Play Move for Moves 1, 2 & 3
//                (2) widened board for easier readibility

// Create function to handle first three moves of the play
    function genericPlayMove() {
        console.log("\nTharin moves up 1 step toward the princess.");
        tharin.goUp(1);
        console.log("Each ogre moves inward 1 step.");
        ogre1.goLeft(1);
        ogre2.goRight(1);
        printBoard();   
    }




// CREATE BOARD SPACE

    // SET BOARD DIMENSIONS
    var BOARD_ROWS = 15;
    var BOARD_COLS = 15;

    // CREATE FUNCTION TO PRINT OUT BOARD
    function printBoard() {
        // for each row in the board, print a string representing that part of the board
        for (var rowNum=0; rowNum<BOARD_ROWS; rowNum++) {
            console.log(createRowString(rowNum));
        }
    }

    // CREATE A FUNCTION TO CONCATENATE EACH ROW INTO A STRING OF THAT ROW's COLUMNS
    function createRowString(row) {
        // Create an empty string as a starting point
        var rowString = "";
        // For each spot in the rowString, determine if any/many/no character belongs in the spot
        for (var col=0; col<BOARD_COLS; col++) {
            // Create a variable to hold the character value the single space will get
            fillChar = "";
            // Create a variable to count number of characters in the spot
            numMatches = 0;
            // Search to see how many and which character is in the row/col space
            // for each of the characters, check to see if their location matches the spot being searched
            for (var charNum=0; charNum<characters.length; charNum++) {
                if ((characters[charNum].row === row) && (characters[charNum].col === col))
                {
                    // if a match, then put that character's representation_character in the spot
                    // NOTE: this may override another character
                    fillChar = characters[charNum].rep_char;
                    // if a match, then also increment the number-of-matches variable
                    numMatches++;
                    // No else statement needed--handl non-matches separately
                }
            }
            // If multiple characters are in the space, the "Fill Character" gets a dummy (2X)
            if (numMatches > 1)
            {
                fillChar = "2X ";
            }
            // If no characters are in the space, the "Fill Character" gets a blank
            else if (numMatches === 0)
            {
                fillChar = "__ ";
            }
        // Add most recently determined spot to the rowString
        rowString += fillChar;

        }
        // Return final rowString to PrintBoard() function
        return rowString;
    }   // end function 

// SET UP EMPTY CHARACTERS ARRAY
var characters = new Array;

// CREATE CHARACTER PROTOTYPE(CLASS?) WITH PROPERTIES AND MOVEMENT FUNCTIONS
function Char( charName, row, col, rep_char ) {
    // Set character properties
    this.name = charName;
    this.row = row;
    this.col = col;
    this.rep_char = rep_char;

    // Add character to arrach of characters
    characters[characters.length] = this;

// Set up character movement functions (up, right, down,left)
    this.goUp = function(distance) {
        this.row -= distance;
    };

    this.goDown = function(distance) {
        this.row += distance;
    };

    this.goLeft = function(distance) {
        this.col -= distance;
    };

    this.goRight = function(distance) {
        this.col += distance;
    };

}  // ends create character shell object


// GAME ACTION:

// STEP 0:  Place initial characters
var tharin = new Char("Tharin", 11, 4, "Th ");
var ogre1 = new Char ("Ogre 1", 7, 8, "Og1");
var ogre2 = new Char ("Ogre 2", 7, 1, "Og2");
var princess = new Char ("Princess", 4, 4, "Prs");

// STEP 1:  Tharin moves up, and ogres move inward
console.log("\nStart of Play");
genericPlayMove();

// STEP 2:  Tharin moves up, and ogres move inward again
genericPlayMove();

// STEP 3:  Tharin moves up, and ogres move inward again
genericPlayMove();


// STEP 4: Ogres collide and collapse (change ogre appearance to show them out of play.)
console.log("\nOgres are running so fast, they hit each other, and collapse back, dead.  Tharin pauses to laugh.");
ogre1.goRight(1);
ogre2.goLeft(1);
ogre1.rep_char = "XX ";
ogre2.rep_char = "XX ";
printBoard();

// STEP 5:  Mission Accomplished!
console.log("\nTharin moves up 3 spaces toward the princess.");
tharin.goUp(3);
printBoard();
console.log('Tharin says, "I have rescued you."');
console.log('Princess says, "Bullshit!!  I saw what happened!"');
=======
>>>>>>> ec7a16c7d68b599d0237170c267007391058aa01


// 3. "TIME IS MONEY!"

var clients = new Array;

function Client(name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote=quote;
    clients[clients.length] = this;
}

//YOUR CODE HERE!

<<<<<<< HEAD
// Reflection
/*
This challenge had its ups and downs.  On the one hand, I really had trouble even understanding what we were 
supposed to be doing.  I spent some time searching for a spot on Code Combat where I could set up my own 
mission, but I then realized that wasn’t the challenge.  Instead the challenge was to think about creating 
my own mission.  How on earth do I do that?  I spent most of my time thinking about how I would create a 
space in which I could create a mission.  How do I visually represent that space and any characters on the 
console?  My mission ended up being super simple.

On the other hand, I found this challenge pretty invigorating.  The last two weeks on HTML and CSS have made 
me learn a lot and try to get comfortable with being uncomfortable and ignorant.  I found the topic somewhat 
interesting, but the material also made me question whether DBC was right for me.  This challenge put me back 
on track, joyfully staying up late and waking up early to try to figure out the code.

Since I was having a good time with it, I considered making the play more involved, adding additional objects 
(sabres, magic wands, etc.) or even user interactivity.  I’m pretty confident I would be able to do this.  It 
would take me several more hours, but I’d probably enjoy those hours.  However, I’m not going to do that.

Instead, I’m going to try to focus my time on other things.  I know I love coding, so I don’t necessarily need 
to spend time doing something I’m sure I could do (even if it would still be challenging).  Following the 
mentality of Shareef’s kitchen v. table video (which I really think should be called kitchen v. front-of-house 
or kitchen v. customer to better drive the point home), .  I’ve realized that DBC is somewhat like law school--
they ask you to do an enormous amount of work and then say that that is really the bare minimum.  I need to 
focus not on assignments or intermediate tasks but on long-term knowledge creation; the assignments/tasks are 
merely tools and checkpoints to get to that knowledge.

I note that even though I feel comfortable with certain programming concepts in JavaScript, I don’t yet get 
how to use it to create interactivity on a web page.  I assume that’s a big deal, and I’ll try to focus on that 
during my time this week.


*/
=======
var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 4. "SHOW 'EM OFF!"
function Display(actor) {
    console.log("This is " + actor.name + ".  He/She is " + actor.age + ".  His/Her favorite quote is " + actor.quote);
}



for (actors in Client) {
  Display(actors);
}



// ** BONUS **


//  Your Reflection:
>>>>>>> ec7a16c7d68b599d0237170c267007391058aa01
