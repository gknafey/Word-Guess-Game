var object = {
    letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"],
    word: ["strange"],
    guessesLeft: 13,
    win: 0,
};

var guesses = []
var correctguess = []

var guessesNumber = function() {
    document.getElementById("guessesleft").innerHTML = object.guessesLeft;
};

var wins = function() {
    document.getElementById("wins").innerHTML = object.win;
};

var lettersGuessed = function() {
    document.getElementById("ltrguess").innerHTML = guesses.join("-");
};

var correctLetters = function() {
    document.getElementById("correct").innerHTML = correctguess.join("-")
};

var gameover = function() {
    object.guessesLeft = 13;
    guesses = [];
    correctguess = [];
    guessesNumber();
    lettersGuessed();
    correctLetters();
};

guessesNumber();
wins();
correctLetters();

document.onkeydown = function(game) {
    object.guessesLeft --;
    var letter = event.key.toLowerCase();
    
    if(letter === "s" || letter === "t" || letter === "r" || letter === "a" || letter === "n" || letter === "g" || letter === "e") {
        correctguess.push(letter);

        if (letter === "s") {
            correctguess[0] = "s"
            if (correctguess.length > 6) {
                correctguess.length -1;
            };
        };
        if (letter === "t") {
            correctguess[1] = "t"
            if (correctguess.length > 6) {
                correctguess.length -1;
            };
        };
        if (letter === "r") {
            correctguess[2] ="r"
            if (correctguess.length > 6) {
                correctguess.length -1;
            };
        };
        if (letter === "a") {
            correctguess[3] = "a"
            if (correctguess.length > 6) {
                correctguess.length -1;
            };
        };
        if (letter === "n") {
            correctguess[4] = "n"
            if (correctguess.length > 6) {
                correctguess.length -1;
            };
        };
        if (letter === "g") {
            correctguess[5] = "g"
            if (correctguess.length > 6) {
                correctguess.length -1;
            };
        };
        if (letter === "e") {
            correctguess[6] = "e"
            if (correctguess.length > 6) {
                correctguess.length -1;
            };

        };
    };
    guesses.push(letter);
    guessesNumber();
    lettersGuessed();
    correctLetters();
    wins();

    if (correctguess.length = 6) {
        object.win = 1;
    };
    console.log(correctguess.length);
    if (object.guessesLeft === 0) {
        document.getElementById("picture").innerHTML = "YOU LOSE";
        gameover();
    };
};





