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

    currentWordToGuess: [],
    currentSolvedWord: [],
    guessedLetters: [],
    guessesRemaining: 15,
    wins: 0,


    initalizeGame: function() {
        //Choose a word from array and use as currentWordToGuess
        //Empty out currentSolvedWords & guessedLetters
        //Reset guessesRemaining

    },

    isLetterGuessed: function(letter){
        //Check to see if letter has been guessed before & return result 
        
    },

    isLetterinWord: function(letter){
        //Check to see if letter is in the word that is trying to be guessed 
        //return true/false
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