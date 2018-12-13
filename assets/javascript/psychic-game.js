
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

document.onkeyup = function(event) {
    var playerGuess = event.key;
    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    var options = ["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    if(options.indexOf(playerGuess) > -1) {
        if(playerGuess === computerGuess) {
            wins++;
            numGuesses = 9;
            guessChoices = [];
        }
        else if(playerGuess != computerGuess) {
            numGuesses --;
            guessChoices.push(playerGuess);
        }
        if(numGuesses === 0 ) {
            numGuesses = 9;
            losses ++;
            guessChoices = [];
        }
    
        var html = 
        "<h1> The Psychic Game </h1>" +
        "<p> Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses left: " + numGuesses + "</p>" +
        "<p>Your Guess So far: " + guessChoices.join(", ") + "</p>";

        document.querySelector("#psychic-game").innerHTML = html;

    }
};

 