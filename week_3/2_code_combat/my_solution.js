// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 
// CHALLENGE 01:  RESCUE MISSION 
 
	// Move down 2 steps
	this.moveDown();
	this.moveDown();

	// Move right 1 step
	this.moveRight();

	// Move up 2 steps
	this.moveUp();
	this.moveUp();

	// Move right 3 steps
	this.moveRight();
	this.moveRight();
	this.moveRight();

	// Move down 2 steps
	this.moveDown();
	this.moveDown();

	// Attack!
	this.attackNearbyEnemy();
 
 

// CHALLENGE 02:  GRAB THE MUSHROOM

	// GO TO AND GET THE MUSHROOM
		// Move up 1 step
		this.moveUp();
		// Move right 1 step
		this.moveRight();
		// Grab mushroom

	// GO TO ENEMY AND ATTACK
		// Move left 1 step
		this.moveLeft();
		// Move up 1 step
		this.moveUp();
		// Attack!
		this.attackNearbyEnemy();
 

// CHALLENGE 03:  DRINK ME
 	// KILL MUNCHKIN 1
		this.attackNearbyEnemy();

 	// GRAB THE HEALTH POTION
		// Move right 1 step
		this.moveRight();
		// Move down 1 step
		this.moveDown();
		// Get and Drink Potion

 	// KILL MUNCHKIN 2
		// Move up 1 step
	 	this.moveUp();
	 	// Move right 1 step
		this.moveRight();
		// Attack!
		this.attackNearbyEnemy();


// CHALLENGE 04: TAUNT THE GUARDS

	// OPEN PHOEBE'S CELL
	this.moveRight();
	this.bustDownDoor();

	// DISTRACT GUARD
		// Approach guard
		this.moveRight();
		// Call out to guard
		this.say("Hey there!");
		// Lure guard toward Phoebe's cell
		this.moveLeft();
		this.moveLeft();
		// Cue Phoebe to attack
		this.say("Attack!");

	// LURE PHOEBE OUT
	this.moveRight();
	this.say("Follow me.");
	this.moveRight();
	this.moveRight();
	this.moveUp();

	// DISTRACT GUARDS
		// Approach guards
		this.moveRight();
		// Call out to guards
		this.say("Hey there!");
		// Lure guards into the loop
		this.moveDown();
		this.moveRight();
		this.moveUp();
		// Escape to the right
		this.moveRight();


// CHALLENGE 05:  IT'S A TRAP
	// Get close to ogre
	this.moveDown();
	this.moveDown();
	// Taunt ogre by saying something
	this.say("What's up?!");
	// Lure ogre into X marks the spot
	this.moveUp();
	this.moveUp();


//CHALLENGE 06:  BREAK THE PRISON
// Write this isFriend(name) spell to tell friend from foe.
// Return true for friends' names, false for ogres' names.

	// Return true for friends' names
	if(name === "William" || name === "Gordon")
	    return true;
	if (name === "Lucas" || name === "Marcus" || name === "Robert")
	    return true;

	// Return false for ogres' name
	if(name === "Krogg" || name === "Brack") 
	    return false; 
	if(name === "Gort" || name === "MARCUS")
		return false;

	// Return false if unsure of friend status
	return false;


// CHALLENGE 07:  TAUNT
	// Lure the ogre right into your arrow trap
	this.say("Hello, Monsieur le Ogre!");
	this.say("Would you mind coming over here please?");
	this.say("I think I've got something you'd like.");
	// One final insult should get him approaching
	this.say("No, seriously.  I'm not a liar or anything.");
	// Ogre should come running into tower's range; tower can shoot him




// CHALLENGE 08:  COWARDLY TAUNT

	// Run your soldier out where the ogres can hear you.
	this.moveXY(63,20);
	// Say something!
	this.say("I'm over here, you big, ugly ogres!");
	// Then run back behind the arrow towers for safety.
	this.moveXY(70,11);


// CHALLENGE 09:  COMMANDING FOLLOWERS

	// Guide Tharin to his army & gree them
	this.moveXY(49, 66);
	this.moveXY(60, 63);
	this.moveXY(75, 63);
	this.say("Hail, friends!");

	// Becon army to follow him, then lead them to combat spot
	this.say("Will you follow me to victory and glory!?");
	this.moveXY(67,50);

	// Incite attack and then move to safety
	this.say("Attack! Attack!  Attack!");
	this.moveXY(60,63);



// CHALLENGE 10:  MOBILE ARTILLERY

	// Move into first position and attack first group of ogres
	this.moveXY(30, 26);  
	this.attackXY(46, 5); 

	// Move into second position and attack second group of ogres twice
	this.moveXY(50,44);
	this.attackXY(67,57);
	this.attackXY(57,45);

	// Attack third group of ogres twice, relocating to safety between attacks
	this.attackXY(47,60);
	this.moveXY(50,31);
	this.attackXY(50,44);





// Reflection:
// Write your reflection here.

/* This is referring to Tharin, the object we want to move.  
	We can think of each of the lines as a simple sentence in which
	"this" is the subject and the action after the dot(.) is the verb. /*

/* In JavaScript, and in many languages, we use functions, procedures, or
	methods.  These are blocks of code that we create to use elsehwere in a 
	program.  They are great for doing repeated actions, so we don't have to 
	rewrite the code every time.  Many times, we want to include additional 
	information when we call these procedures.  For instance, instead of 
	just saying moveUp to mean moveUp 1 step, we could have said moveUp(3)
	to mean move up 3 steps.  In this case, the "3" would have been an 
	argument of the function/method moveUp.  Procedures generally take
	their arguments within these parentheses, set immediately after the 
	procedure itself.  Moreover, even where a function does not take ANY
	arguments (such as our moveUp function), it is common (and sometimes
	required) to use the "()" after the function simply to denote that it
	is indeed a function and that it takes no arguments./* 

/*  Semicolons indicate the end of a line of code.  Given that it is sometimes
	useful to split longer single lines of code into multiple lines to make them
	more readable, the semicolons help cue the reader (and the compiler) that the
	line is indeed at an end.
*/

/*	I found this challenge pretty tedious.  It took me more than an hour to 
	acquaint myself with basic JS syntax.  I didn’t know anything about JS 
	beforehand, but I really don’t think it would have taken me so long to 
	process it.

	I did learn that JS relies heavily on the object model.  And I did make 
	the connection of how many webpage concepts are made possible by 
	JavaScript.
*/
