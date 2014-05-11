// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.  Alan FLorendo
//  2.  Julius Jung


// 1. "YOU SIGNED... WHO?!"
//Meryl Streep



// 2. "Here they Come!"
var actor1 = {
    name: "Adam Sandler",
    age: 47,
    quote: "That's your home!  Are you too good for your home?!"
}

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



// 3. "TIME IS MONEY!"

var clients = new Array;

function Client(name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote=quote;
    clients[clients.length] = this;
}

//YOUR CODE HERE!

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