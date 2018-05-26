

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
        this.guessesRemaining = 10;

        //Print all necessary variables to the screen
        $('#currentSolvedWord').text(this.currentSolvedWord);
        $('#guesses-remaining').text(this.guessesRemaining);

    },

    replaceAt: function(string, index, replacement){
        
        return (string.substr(0, index) + replacement + string.substr(index + replacement.length));
        
    },

    handleGuessedLetter: function(letter){

        console.log("Letter: " + letter );

        let isNewLetter = this.isNewGuessedLetter(letter);

        if(isNewLetter){
            let isLetterinWord = this.isLetterinWord(letter);

            if(isLetterinWord){
                //Add it to their solved letters
                this.correctGuess(letter);

            }
            else{
                //Add it to the list of guessed letters and reduce number of guesses
                this.incorrectGuess(letter);
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

    correctGuess: function(letter){
        //If the guess is correct, add to the array of currentSolvedWord & check to see if they won the game
        for (let i = 0; i < this.currentWordToGuess.length; i++){ 

            if (this.currentWordToGuess[i] === letter){
                let index = i * 2;
                this.currentSolvedWord = this.replaceAt(this.currentSolvedWord, index, letter);
            }
        }
        $('#currentSolvedWord').text(this.currentSolvedWord);
                console.log("Inside correctGuess");
    },

    incorrectGuess: function(letter){
        //If the guess is incorrect, reduce number of guesses and add/display in guessed letters and check if game is over 
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

        //Check to see if the guesses remaining is now zero 
        if (this.guessesRemaining === 0){
            console.log("You lost");
        }


    },

    didWinGame: function(){
        //Check to see if currentSolvedWord matches the currentWord array 

    },

    winGame: function(){
        //If they win, increase the number of wins, display a picture of the park (?), and initalize the next game 
    },

    


};


//Create your game
game.initalizeGame();


document.onkeyup = function(event) {

    let letterGuess = event.key;
    game.handleGuessedLetter(letterGuess);
      
};
