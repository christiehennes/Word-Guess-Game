

//Declare the game object with all functions except for key press
let game = {

    allWords: 
    [
        "yosemite",
        "glacier",
        "zion",
        "yellowstone",
        "sequoia",
        "everglades",
        "volcano"
    ],

    currentWordToGuess: '',
    currentSolvedWord: '',
    guessedLetters: [],
    guessesRemaining: 15,
    wins: 0,


    initalizeGame: function() {
        //Choose a word from array and use as currentWordToGuess
        this.currentWordToGuess = this.allWords[this.wins];
        console.log("Inside initalizegame and word to guess: " + this.currentWordToGuess);

        //Initalize the current solved word to be all _
        for (let i = 0; i < this.currentWordToGuess.length; i++){
            this.currentSolvedWord = this.currentSolvedWord + '_ ';
        }
        console.log("Current solved word: " + this.currentSolvedWord);
        
        //Initalize other varibales
        this.guessedLetters = [];
        this.guessesRemaining = 15;

        //Print all necessary variables to the screen
        $('#currentSolvedWord').text(this.currentSolvedWord);
        $('#guesses-remaining').text(this.guessesRemaining);

    },

    handleGuessedLetter: function(letter){

        console.log("Letter: " + letter );

        let isNewLetter = this.isNewGuessedLetter(letter);

        if(isNewLetter){
            let isLetterinWord = this.isLetterinWord(letter);

            if(isLetterinWord){
                //Add it to their solved letters
            }
            else{
                //Add it to the list of guessed letters and reduce number of guesses
            }
        }

    },

    isNewGuessedLetter: function(letter){
        //Check to see if letter has been guessed before
        //Check to see if this letter is already in the current Solved word  & return result 

        if (!this.currentSolvedWord.includes(letter)){
            if (!this.guessedLetters.includes(letter)){
                return true;
            }
        }
        return false;
        
    },

    isLetterinWord: function(letter){
        //Check to see if letter is in the word that is trying to be guessed 
        //return true/false
        console.log("Is this letter in the word? " + this.currentWordToGuess.includes(letter));

        return this.currentWordToGuess.includes(letter);
    },

    incorrectGuess: function(letter){
        //If the guess is incorrect, reduce number of guesses and add/display in guessed letters

    },

    correctGuess: function(letter){
        //If the guess is correct, add to the array of currentSolvedWord & check to see if they won the game 
    },

    didWinGame: function(){
        //Check to see if currentSolvedWord matches the currentWord array 

    },

    winGame: function(){
        //If they win, increase the number of wins, display a picture of the park (?), and initalize the next game 
    }


};


//Create your game
game.initalizeGame();


document.onkeyup = function(event) {

    let letterGuess = event.key;
    game.handleGuessedLetter(letterGuess);
      
};
