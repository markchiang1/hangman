
var computerWordArr= ["cat", "dog", "mouse", "bird", "whale", "alligator", "tiger", "German Shephard"]; 
var userGuess="";
var computerRandWord="";
var blankArr=[];
var letterArr =[];

document.onload = function(){

    function welcomeMessage(){
        alert("Welcome to Animal Hangman!");
    }

    // function checkComputerWords(){
    //     for(i=0; i<computerWordArr.length; i++){
    //         console.log(computerWordArr[i]);
    //     }
    // }

    function computerWord(){ 
        var randNum = Math.floor(Math.random()*8);
        computerRandWord = computerWordArr[randNum];
        // console.log(computerRandomWord);

        for(i=0; i<computerRandWord.length; i++){
            letterArr[i]=computerRandWord.charAt(i);
        }
        // console.log(letterArr);

        for(i=0; i<letterArr.length; i++){
            blankArr[i] = "_";
        }
    }

    function printString(){
        var printString = ""
        for (i=0; i<blankArr.length; i++){
            console.log(blankArr.length);
            printString += blankArr[i];
            console.log(printString);
            printString += " ";
            console.log(printString);
        }
        document.getElementById("computerWord").innerHTML = printString; //fix
    }
}  


// function userGuess(){
       
//     var stringGuess = "";


// checkComputerWords();
welcomeMessage();
computerWord();
printString();