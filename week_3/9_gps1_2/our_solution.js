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
    quote: "Do you wanna build a snowman?",
    
    showQuote: function() {
      console.log(this.quote);
    }
    
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

clients[1] = actor1;
clients[2] = actor2;
clients[3] = actor3;

for (var i = 0; i < clients.length; i++) {
  Display(clients[i]);
}

console.log("Here is the favorite quote of " + actor2.name + ":");
actor2.showQuote();

// ** BONUS **

Client.prototype.movies = function(movie){
    this.movie = movie;
}

actor1.movie = "51st Dates";
actor2.movie = "The Grudge";
actor3.movie = "Ace Ventura: Pet Detective";
shooterMcGavin.movie = "Happy Gilmore";

var checkMovie = function(inMovie) {
    for (var i = 0; i < clients.length; i++) {
        if (clients[i].movie === inMovie) {
            console.log(clients[i].name + " was in the movie, " + inMovie + ".");
        }
    }
}

checkMovie("Happy Gilmore");

//  Your Reflection:
/*
I really enjoyed pairing with Julius and my second GPS in general.  We both were in the same position on JavaScript:  
we had studied all week, we had been successful with JS when we approached it slowly, and we were both quite 
hesitant to exhibit our skills on the spot.  

I think we both found the movie agent theme a little contrived, but we understood where it was trying to take us 
and what the pedagogical value was.  We both worked well together, especially as we were patiently trying to execute 
different shots in the dark: "let’s try this and see if it compiles" was a pretty common mantra of ours.  I think we 
both enjoyed the nature of the project.  There was no test-driven code, but we could run it and clearly tell if it 
was working.  If it was not, then we only needed to try two or three other steps to get us to where we needed to go.  

Neither of us is especially familiar with JS, but I think we accomplished the learning objectives.  We get the idea 
of creating arrays, giving them properties, and putting them into arrays.  Each of us can clearly spend time with 
internet searches and error messages and, after a moment, get our JavaScript to do what it needs to do.
*/