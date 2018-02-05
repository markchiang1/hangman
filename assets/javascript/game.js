
// var computerWordArr= ["cat", "dog", "mouse", "bird", "whale", "alligator", "tiger", "german shephard"]; 
var computerWordArr= ["alligator"]; 
var userGuess="";
var computerRandWord="";
var blankArr=[];
var letterArr=[];
var wrongGuesses="";
var gameBegin = false;
var correctGuess=false;
var alreadyGuessed=false;
var validGuess=false;
var uniqueCorrectGuess = true;
var userLife=3;
var numOfTries=8;

function welcomeMessage(){
    alert("Welcome to Animal Hangman!");
}
welcomeMessage();

function computerWord(){ 
    var randNum = Math.floor(Math.random()*1);
    computerRandWord = computerWordArr[randNum];
    console.log(computerRandWord);

    for(i=0; i<computerRandWord.length; i++){
        letterArr[i]=computerRandWord.charAt(i);
    }

    for(i=0; i<letterArr.length; i++){
        blankArr[i] = "_";
    }
}
computerWord();


function printString(){
    var printString = "";
    for (i=0; i<blankArr.length; i++){
        printString += blankArr[i];
        printString += " ";
    }
    document.getElementById("computerWord").innerHTML = printString;
}

function printWrongGuesses(){
    var printString ="";
    for (i=0; i<wrongGuesses.length; i++){
        printString += wrongGuesses.charAt(i);
        printString += " ";
    }
    document.getElementById("wrongGuessList").innerHTML = printString;
}
function checkValidGuess(){
    console.log(userGuess.charCodeAt(0));
    if(userGuess.charCodeAt(0)<97 || userGuess.charCodeAt(0)>122){
        alert("Please follow rules and enter a valid value!")
        validGuess=false;
    }
    else{
        validGuess=true;
    }
}
function checkWrongGuess(){
    for(i=0; i<wrongGuesses.length; i++){
        if (userGuess===wrongGuesses.charAt(i)){
            alreadyGuessed=true;
        }
    }
    if(alreadyGuessed===true){
        alert("You already guessed that!")
    }
    else if(alreadyGuessed!=true && validGuess===true){
        wrongGuesses+=userGuess;
    }
    alreadyGuessed=false;
}

document.onkeyup = function(event){
    if (gameBegin===true){
        userGuess = String.fromCharCode(event.which).toLowerCase();
        console.log(userGuess);
        checkValidGuess();
        
        if(validGuess===true){
            for(i=0;i<computerRandWord.length; i++){
                if(userGuess===computerRandWord.charAt(i) && blankArr[i]==="_"){
                    blankArr[i]=userGuess;
                    correctGuess=true;
                }
                else if(userGuess===computerRandWord.charAt(i) && blankArr[i]!="_"){
                    correctGuess=true;
                    uniqueCorrectGuess=false;
                }
            }
            if(uniqueCorrectGuess===false){
                alert("You already guessed that!")
            }
            if(correctGuess!=true){
                checkWrongGuess();
            }
            correctGuess=false;
            uniqueCorrectGuess=true;
        }
    }
    document.getElementById("computerWordPrompt").innerHTML = "The computer word is: ";
    printString(); 
    printWrongGuesses();
    gameBegin=true;
}
