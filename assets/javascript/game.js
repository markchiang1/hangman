
var computerWordArr= ["cat", "gorilla", "mouse", "bird", "whale", "alligator", "tiger", "german shephard"]; 
var userGuess="";
var computerRandWord="";
var blankArr=[];
var wrongGuesses="";
var gameBegin = false;
var correctGuess=false;
var alreadyGuessed=false;
var validGuess=false;
var uniqueCorrectGuess = true;
var userLife=3;
var numOfTries=8;
var guessedWord =false;

function welcomeMessage(){
    alert("Welcome to Animal Hangman!");
}
welcomeMessage();

function computerWord(){ 
    var randNum = Math.floor(Math.random()*computerWordArr.length);
    console.log(randNum);
    computerRandWord = computerWordArr[randNum];
    console.log(computerRandWord);

    for(i=0; i<computerRandWord.length; i++){
        if(computerRandWord.charAt(i)===" "){
            blankArr[i] = " ";
        }
        else{
            blankArr[i]="_";
        }
    }  
}
computerWord();

function printString(){
    var printString = "";
    var currentString = ""; //the .toString() return string of blankArr was not equal to computerRandWord; .toString() added commas between letters
    for (i=0; i<blankArr.length; i++){
        if(blankArr[i]===" "){
            printString +="&nbsp;&nbsp;";
        }
        else{
            printString += blankArr[i];
            printString += " ";
        }    
        currentString+=blankArr[i];
    } 
    console.log(computerRandWord);
    console.log(currentString);
    if(currentString===computerRandWord){
            guessedWord=true;
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
    if(userGuess.charCodeAt(0)<97 || userGuess.charCodeAt(0)>122){
        alert("Please follow rules and enter a valid value!");
        validGuess=false;
        numOfTries--;
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
    else if(alreadyGuessed!==true && validGuess===true){
        wrongGuesses+=userGuess;
        numOfTries--;
    }
    alreadyGuessed=false;
}
function gameStats(){
    document.getElementById("triesCounter").innerHTML = numOfTries;
    document.getElementById("lifeSpan").innerHTML = userLife;    
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
                else if(userGuess===computerRandWord.charAt(i) && blankArr[i]!=="_"){
                    correctGuess=true;
                    uniqueCorrectGuess=false;
                }
            }
            if(uniqueCorrectGuess===false){
                alert("You already guessed that!")
            }
            if(correctGuess!==true){
                checkWrongGuess();
            }
            correctGuess=false;
            uniqueCorrectGuess=true;
            gameStats();
            printString(); 
            if(guessedWord===true){
                computerWord();
                printString();
                numOfTries=8;
                gameStats();
                wrongGuesses="";
                guessedWord=false;
            }
            printWrongGuesses();
            gameBegin=true;  
        }
        if(numOfTries===0 && userLife>0){
            computerWord();
            document.getElementById("computerWordPrompt").innerHTML = "The computer word is: ";
            printString();
            wrongGuesses = "";
            printWrongGuesses();
            numOfTries=8;
            userLife--;
            alert("You lost a life!");
            gameStats();
        }
        if(userLife===0){
            document.getElementById("promptGame").innerHTML = "GAME OVER!!!";
            document.getElementById("computerWordPrompt").innerHTML = "";
            document.getElementById("computerWord").innerHTML ="";
            wrongGuesses = "";
            printWrongGuesses();
            numOfTries=0;
            gameStats(); 
            alert("GAME OVER");
        }
    }
    else{
        document.getElementById("computerWordPrompt").innerHTML = "The computer word is: ";
        printString(); 
        printWrongGuesses();
        gameStats();
        gameBegin=true;  
    }  
}
