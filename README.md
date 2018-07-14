# National Park Word Guess / Hangman Game 

[Project Link](https://christiehennes.github.io/Word-Guess-Game/)

## Instructions
 
 * Use any key to start playing the game 
 * You have 10 guesses to guess all the letters
 * Your incorrect letter guesses will appear in a list and your correct guesses will be displayed as part of the final word 
 * If you do not guess the correct word after 10 guesses, a new word will be displayed 
 * If you guess the correct word, an image will be displayed, you will get a point, and the next word will appear to guess 


 ## Project Design

 * I used an object for my game and created various functions to support the different aspects of the game 
 * I wrapped all functions into two main calls: initalizeGame and handleGuessedLetter
 * initalizeGame setups the start of a game by clearing out all previously guesses and pulling a new word
 * handleGuessedLetter handles all the logic for when a letter is entered 
