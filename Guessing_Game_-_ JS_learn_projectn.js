// Guessing Game - JS_learn_projectn
let secretNum = Math.floor(Math.random() * 10) + 1;
let userGuess = prompt("Guess a number between 1 and 10");
if(parseInt(userGuess) === secretNum){
    alert("Congratulations! your guess was correct :)");
}else{
    alert("Opps! your guess was incorrect :( the number is: "+ secretNum);
}
