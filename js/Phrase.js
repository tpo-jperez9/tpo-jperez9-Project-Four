/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase { 
    constructor(phrase) { //Constructor that holds actual prahse that object is representing//
      this.phrase = phrase.toLowerCase(); //initializes the phrase and sets it to lowerCase()//
    }
  
    
      //Display phrase on game screen//
     
    addPhraseToDisplay() {
      for(let i = 0; i < this.phrase.length; i++) {
        const addLI = document.createElement('li');
        const appendLI = ul.appendChild(addLI);
        let currentLetter = this.phrase[i];
  
        if(currentLetter !== ' ') { //Ensures current letter is not space//
          appendLI.classList.add('hide'); //adds the css class hide to all phrase characters//
          addLI.textContent = currentLetter; //passes currentLetter to current li element//
          appendLI.classList.add('letter', currentLetter); //adds css class for letter//
        } else {
        appendLI.classList.add('space'); //adds the css class of space if there is a space character or letter//
        }
      }
    };
  
    
      //Checking if a passed letter is in the phrase//
     
    checkLetter(letter) {
      if(game.activePhrase.phrase.includes(letter.toLowerCase())) { //converts letter to lowerCase and verifys if its included in game.activePhrase//
        return true;
      } else {
        return false;
      }
    };
  
    
      //Displays passed letter on game screen when match is identified//
     
     
    showMatchedLetter(letter){ //This will select the letter DOM elements that have a CSS class name that matches the selected letter
        for (let i = 0; i < ulChild.length; i++) {
        let currentChild = ulChild[i];
        //Replaces all selected elements hide CSS class with the show CSS class//
        if(currentChild.classList.contains(letter)) {
          currentChild.classList.remove('hide');
          currentChild.classList.add('show');
        }
      }
    };
  
  }
