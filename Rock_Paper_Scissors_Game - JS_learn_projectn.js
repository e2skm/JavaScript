// Rock_Paper_Scissors_Game - JS_learn_projectn

// Function to prompt user for choice
function getUserChoice(){
    console.log("Please select any of the following letters:")
    //var userChoice = prompt("R For Rock P For Paper Or S For Scissors");
    var userChoice = " ";
    let x = Math.round(Math.random() * 2 + 1);
    if(x === 1){
        userChoice = 'R';
    } 
    else if(x === 2){
        userChoice = 'P';
    } 
    else{
        userChoice = 'S';
    } 
    var strUserChoice = " ";
    switch (userChoice){
        case 'R':
            strUserChoice = "Rock";
            break;
        case 'P':
            strUserChoice = "Paper";
            break;    
        case 'S':
            strUserChoice = "Scissors";
            break; 
        default:
            console.log("Error you have entered an invalid choice");
            break;    
    }
    console.log(`You have selected -> ${strUserChoice}`);
    return strUserChoice;
}

// Function to generate computer choice
function generateComputerChoice(){
    let compNum = Math.round(Math.random() * 2 + 1);
    var compChoice = "";
    if (compNum === 1){
        compChoice = "Rock";
    }else if(compChoice === 2){
        compChoice = "Paper";
    }else{
        compChoice = "Scissors";
    }
    console.log(`The computer selected -> ${compChoice}`);
    return compChoice;

}

// Function to determine winner 
function determineWinner(userChoice,compChoice){
    var winner = "";
    if(userChoice === compChoice){
        winner = "None";
    }else if(userChoice === "Scissors" && compChoice === "Paper"){ 
        winner = "User";
    }else if(userChoice === "Paper" && compChoice === "Rock"){ 
        winner = "User";
    }
    else if(userChoice === "Rock"  && compChoice === "Scissors"){ 
        winner = "User";
    }
    else{
        winner = "Computer"; 
    }
    return winner;
}

// Function to display result
function getResult(winner){
    if(winner === "None"){// ""
        console.log("Game result: Draw");
    }else{
        console.log(`Game result: ${winner} won`);
    } 
}

// Invoke above functions
let x = getUserChoice();
let y = generateComputerChoice();
let z = determineWinner(x,y);
getResult(z);