/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 
//Global Variables//

//Global DOM variables used in Phrase class//
const phraseSection = document.getElementById('phrase');
const ul = document.querySelector('ul');
const ulChild = ul.children;
const hideClass = document.querySelectorAll('.hide'); //This targets all of the elements with a class of 'hide'
const showClass = document.querySelectorAll('.show'); //This targets all of the elements with a class of 'show'

//Global variables used in Game class//
const overlay = document.querySelector('#overlay');
const tries = document.querySelectorAll('.tries');
const images = document.querySelectorAll('img[src="images/liveHeart.png"]');
const gameOverMessage = document.getElementById('game-over-message');
let livesLost = 0; //This will track lives lost in removeLife() method//

//Global variables used in app.js//
const resetButton = document.getElementById('btn__reset'); //This will target the btn__reset//
const button = document.querySelectorAll('.key');
let game = ''; //This declares a (blank) variable for "new Game()"//
const keysPressed = [];

//This function will hold files for starting a new game//
function startNewGame() {
  game = new Game(); //Creates a new Game object//
  game.startGame(); //Starts game by calling startGame() method//
  keysPressed.length = 0; //reset keysPressed array//
}

 //Event Listener for resetButton//
//start or reset the game  by clicking 'Start Game' button//

resetButton.addEventListener('click', () => {
  startNewGame(); //Start a new instance of the game keyup event or when enter pressed//
});


 //Event Listener for onscreen keyboard buttons//
 //Select keyboard letters by clicking them on the screen//

button.forEach(button => {
  let buttonText = button.textContent;
  button.addEventListener('click', () => {
    game.handleInteraction(button); //call handleInteraction(), passing 'button'
  });
});


//Event Listener for physical keyboard keys/button//
//listen for keyup event//

document.addEventListener('keyup', (e) => {
  const eventKey = e.key; //captures the key value of key pressed//

  //This adds the ability to press 'enter' key to start a new game//
  if(!overlay.style.display || overlay.style.display == 'flex') {
      if(eventKey === 'Enter') {
        startNewGame();
      }
  }
  button.forEach(button => {
    if(overlay.style.display == 'none') { //checks if the onscreen keyboard is displayed//
      //ensure eventKey matches the button text content//
      if (eventKey === button.textContent && !keysPressed.includes(eventKey)) {
        game.handleInteraction(button); //Passes in button to the handleInteraction() method//
        keysPressed.push(eventKey); //add pressed key to the keysPressed array//
      }
    }
  });
});
