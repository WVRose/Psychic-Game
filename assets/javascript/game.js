//alphabet array
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Store Wins 
var wins = 0;

//Losses
var losses = 0;

//Guesses Left
var guessesLeft = 0;

//Your Guesses So Far: 
var guessedLetters = [];

var currentLetter;

//Input from player (onkeyup) and the event
window.onkeyup = function (userEvent) {
    var userKey = userEvent.key;

    //if userKey is a key equal to a letter in our array
    if (letters.indexOf(userKey) >= 0) {
        //if the letter has not been guessed ...
        if (guessedLetters.indexOf(userKey) < 0) {
            guessedLetters.push(userKey);

            //get new letter
            currentLetter = getNewLetter();

            compareLetters(userKey);
            if (guessesLeft < 1) {
                restart();
            }
            console.log(userKey);

            console.log(currentLetter);

            console.log(wins);

            console.log(losses);

            console.log(guessesLeft);

            console.log(guessedLetters);
            document.getElementById('print-your-guesses').innerHTML = guessedLetters;
        }
    }




};

//start the game and get new letter
function restart() {
    guessesLeft = 10;
    guessedLetters = [];


}

function getNewLetter() {
    var alphaIndex = Math.floor(Math.random() * letters.length);
    return letters[alphaIndex];
}

function compareLetters(guessedLetter) {
    //if player 1 wins ...
    if (guessedLetter === currentLetter) {
        // increment wins
        wins += 1;
    }
    else {
        //increment losses
        guessesLeft -= 1;
    }
}
