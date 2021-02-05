/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases(); 
         this.activePhrase = null;
     }

     //array of phrases for in game play//

     createPhrases() {
         const phrase = [
            new Phrase("As you wish"),
            new Phrase("Go chiefs"),
            new Phrase("Go jayhawks"),
            new Phrase("Inconceivable"),
            new Phrase("This is the way"),
         ];
         return phrase;
     }

     //Random phrase selection from phrase property//

     getRandomPhrase() { //Selects and returns a random phrase stored in the phrase game class property
         const randomPhraseIndex = Math.floor(Math.random() * this.phrases.length);
         const randomPhrase = this.phrases[randomPhraseIndex]; //passes a random phrase from the phrase array
         return randomPhrase;
     }

     //Start game by selecting a random phrase to display to player//

     startGame() {
         //Remove all li elements from the ul element//
         while (ul.firstChild) {
             ul.innerHTML = '';
         }

         //enable all of the onscreen keyboard funtions or buttons//
             button.forEach(button => {
             button.disabled = false;
             button.classList.remove('wrong', 'chosen');
         });

         //resets all of the life heart images in the scoreboard//
         images.forEach(image => image.src = 'images/liveheart.png');

         //start a new game//
         overlay.style.display = 'none'; //This will hide the start overly//
         const newRandomPhrase = this.getRandomPhrase(); //This will call getRandomPhrase() to select the phrase object from the array of phrases
         newRandomPhrase.addPhraseToDisplay(); //This calls addPhraseToDisplay() method on newRandomPhrase to add the selected phrase to the game screen
         this.activePhrase = newRandomPhrase; //This will store the selected phrase in activePhrase property//
     }

     //Checking for winning moves//

     checkForWin() {
         const checkWin = [] //This array holds li values with hide className//
         for(let i = 0; i < ulChild.length; i++) {
           if(ulChild[i].classList.contains('hide')) {
             checkWin.push(ulChild[i].textContent);
           }
         }

         //parse checkWin to see if there are any values left in the array//
         if(checkWin.length === 0) {
             return true; //if nothing in the array it will return true - you correctly guessed the phrase!//
         } else {
             return false; //oterwise it will return false//
         }
     };

     //Increases the value of the missed property//
     //removes a life heart img from the scoreboard//
     //checks if player has remaining lives or ends game if player is out//

     removeLife() {
         this.missed++; //increments the missed property//
         images[images.length - this.missed].src = 'images/lostHeart.png'; //replace furthest lifeheart to the right of lostheart

         if(this.missed === 5) { //if the player misses five times//
             this.gameOver(false); //If false it is game over//
         }
     };

     //Displays game over message//

     gameOver(gameWon) {
         overlay.style.display = 'flex'; //Displays the original start screen//

         if(!gameWon) {
             gameOverMessage.textContent = "Sorry, better luck next time!"; //Adds a friendly lose message to the game screen//
             overlay.classList.remove('start', 'win'); //removes 'start' and win class//
             overlay.classList.add('lose'); //adds lose class to overlay
         } else {
             gameOverMessage.textContent = 'Congratulations, you guessed the phrase!'; //Add the friendly win message to the game screen//
             overlay.classList.remove('start', 'lose'); //remove start or lose class//
             overlay.classList.add('win'); //Adds win class to the overlay//
         }
     };

     //Handles onscreen keyboard button clicks//

     handleInteraction(button) {
         const buttonContent = button.textContent;
         const checkPhrase = this.activePhrase.checkLetter(buttonContent);

         button.disabled = true; //Disables selected letters on screen keyboard button//
         if(!this.activePhrase.phrase.includes(buttonContent)) {
             button.classList.add('wrong');
             this.removeLife();
         } else {
             button.classList.add('chosen');
             this.activePhrase.showMatchedLetter(buttonContent);

             if(this.checkForWin()) {
                 this.gameOver(true); //if true = win//
             }
         }
     };

 }

 
