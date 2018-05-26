

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
    guessesRemaining: 10,
    wins: 0,


    //Begins a new game by initalizing all variables and selecting a word
    initalizeGame: function() {

        //Clear all or iniatalize variables
        this.currentWordToGuess = '';
        this.currentSolvedWord = '';
        this.guessedLetters = [];
        this.guessesRemaining = 10;

        //Choose a word from array and use as currentWordToGuess
        this.currentWordToGuess = this.allWords[this.wins];
        console.log("Inside initalizegame and word to guess: " + this.currentWordToGuess);

        //Initalize the current solved word to be all _
        for (let i = 0; i < this.currentWordToGuess.length; i++){
            this.currentSolvedWord = this.currentSolvedWord + '_ ';
        }
        console.log("Current solved word: " + this.currentSolvedWord);

        //Print all necessary variables to the screen
        $('#currentSolvedWord').text(this.currentSolvedWord);
        $('#guesses-remaining').text(this.guessesRemaining);
        $('#letters-guessed').text("");

    },

    //"Master" function to run through whether the letter was previously guessed or not and how to handle
    handleGuessedLetter: function(letter){

        //Check to see if it's a new letter that hasn't been guessed 
        let isNewLetter = this.isNewGuessedLetter(letter);

        //For letters not yet guessed, check to see if it's in the current word
        if(isNewLetter){
            let isLetterinWord = this.isLetterinWord(letter);

            //If the letter is in the word, add it to the correctly guessed letters, display, and check if they won the game
            if(isLetterinWord){
                this.correctGuess(letter);
            }
            else{
                //Add it to the list of guessed letters, reduce number of guesses, and restart if they lost the game
                this.incorrectGuess(letter);
            }
        }

    },

    //Check to see if letter has been guessed before
    isNewGuessedLetter: function(letter){
        if (!this.currentSolvedWord.includes(letter)){
            if (!this.guessedLetters.includes(letter)){
                return true;
            }
        }
        return false;   
    },

    //Check to see if letter is in the word that is trying to be guessed 
    isLetterinWord: function(letter){
        return this.currentWordToGuess.includes(letter);
    },

    //Handle correct guesses
    correctGuess: function(letter){

        //Add the letter to the display of current solution
        for (let i = 0; i < this.currentWordToGuess.length; i++){ 

            if (this.currentWordToGuess[i] === letter){
                let index = i * 2;
                this.currentSolvedWord = this.replaceAt(this.currentSolvedWord, index, letter);
            }
        }

        //Display current correct guesses to the screen
        $('#currentSolvedWord').text(this.currentSolvedWord);

        //Check to see if they won the game 
        if (this.currentSolvedWord.indexOf('_') < 0){
            this.didWinGame();
        }
    },

    //Handle an incorrect guess
    incorrectGuess: function(letter){

        //If the guess is incorrect, reduce number of guesses and add/display in guessed letters 
        this.guessesRemaining = this.guessesRemaining - 1;
        this.guessedLetters.push(letter);

        //Display Guesses Remaining to the screen
        $('#guesses-remaining').text(this.guessesRemaining);

        //Display Guessed Letters to the screen
        let guessesLettersString = '';
        for(let i = 0; i < this.guessedLetters.length - 1; i++){
            guessesLettersString = guessesLettersString + this.guessedLetters[i] + ', ';
        }
        guessesLettersString = guessesLettersString + this.guessedLetters[this.guessedLetters.length - 1];
        $('#letters-guessed').text(guessesLettersString);

        //Check to see if the guesses remaining is now zero and reset the game 
        if (this.guessesRemaining === 0){
            this.initalizeGame();
        }
    },

    //Check to see if they won the game
    didWinGame: function(){

        //Check to see if currentSolvedWord matches the currentWord array 
        if (this.currentSolvedWord.indexOf('_') < 0){
            this.wins = this.wins + 1;
            this.initalizeGame();
            $('#number-wins').text(this.wins);
        }
    },
    
    //Function to change letters at certain positions
    replaceAt: function(string, index, replacement){
        return (string.substr(0, index) + replacement + string.substr(index + replacement.length));  
    },

};


//Create your game
game.initalizeGame();


document.onkeyup = function(event) {

    let letterGuess = event.key;
    game.handleGuessedLetter(letterGuess);
      
};
