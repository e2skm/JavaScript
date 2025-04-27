// Lesson 12: Advanced functions practice execerises
// Store a function inside a variable
const add = function(){
  console.log(2 + 3);
};
// Function that takes a function as a parameter
function runTwice(fun){
  for(let i = 0; i < 2; i++){
    fun();
  }
}
// Test above function
runTwice(function(){console.log('12b');});
runTwice(add);
// Change text inside html button after 1 second
function changeText(){
  // Store the start button inside a javascript object using dom
  const startButtonElement = document.querySelector('.js-start-button');
  if(startButtonElement.innerText === 'Start'){
    setTimeout(function(){
      startButtonElement.innerHTML = 'Finished!';
    }, 1000);
    startButtonElement.innerHTML = 'Loading...';
  }else{
    setTimeout(function(){
      startButtonElement.innerText = 'Start';
    }, 1000);
    startButtonElement.innerHTML = 'Loading...';
  }
}
// function to display a message when a button is clicked and remove it after 2 seconds
function displayMessage(){

  setTimeout(function(){
    document.querySelector('.js-added-message').innerHTML = '';
  }, 2000);
  document.querySelector('.js-added-message').innerHTML = 'Added';
}
// Function to change the title depending on which button is clicked
function newMessages(str){
  let messages = 2;
  str === 'add' ? messages++ : messages--;
  setInterval(function(){ 
    document.title = `(${messages}) New messages`;
  },1000);
  setInterval(function(){ 
    document.title = 'App';
  },2000);
}