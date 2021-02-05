# tpo-jperez9-Project-Four
oop-gameshow-ap

An Object Oriented Program gameshow app. This was created by using Vanilla JavaScript. The user will click a letter on the screen or type a letter on the keyboard to try and guess
a phrase that is randomly picked. The user will get up to 5 incorrct guesses before the game is over.

Basic Features Include:
class Game
Constructor that includes three properties of phrases, missed, and activePhrase
createPhrases()  which holds an array of 5 created phrase objects
getRandomPhrase() will return a random phrase and passes it to the Phrase class
startGame() will start or reset the gamescreen with a new phrase
checkForWin()  returns a boolean value on whether the game has been won or is simply over
removeLife() removes a heart img at the bottom of the game screen based on the property game.missed (signifiying an incorrect character guess)
gameOver - returns win or lose game message 
handleInteractionButton - controls the game logic

class Phrase:
Constructor with the phrase property
addPhraseToDisplay() this will display the phrase on the game screen
checkLetter(letter) will verify whether the letter passed to the method is included in the randomly selected phrase
showMatchedLetter(letter) if a match is identified it will show the letter on the game screen

Additions:
Keyboard functionality - press any letter key on the keyboard in lieu of using the gamescreen keyboard
Using the Enter key when the game is over or won will start a new game without having to click on the start game button

CSS Style changes

Adjusted background color - color win - to #233fe0
Adjusted background color - color lose - to #e20d0d
Adjuster background color - color start - to #1a71db
Adjusted keys color - to #110f0f
Adjusted font size - large - to 75px
Adjusted font size - small - to 25px
