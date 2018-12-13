// Declaring Variables
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

// Key press
document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var options = ["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


// If statements
    if(options.indexOf(userGuess) > -1) {
        if(userGuess === computerGuess) {
            wins++;
            numGuesses = 9;
            guessChoices = [];
        }
        if(userGuess != computerGuess) {
            numGuesses --;
            guessChoices.push(userGuess);
        }
        if(numGuesses === 0 ) {

            numGuesses = 9;
            losses ++;
            guessChoices = [];
        }
        var html = 
        "<h1> The Pyschic Game </h1>" +
        "<p> Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left " + numGuesses + "</p>" +
        "<p>Your Guess So far: " + guessChoices.join(", ") + "</p>";

        document.querySelector("#game").innerHTML = html;

    }
};

 