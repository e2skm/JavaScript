// Lesson 12: Advanced functions
// Functions are values - this means that functions can be stored inside variables. Anything we can do with a value, we can also do with a function.
/* Hoisting is a feature that allows us to call a function before it is created, it does not work when the function is stored in a variable */
greeting();
function greeting(){
  console.log('Hello');
}
greeting();

/* Anonymous function - function without a name. Whenever a  function is asigned to a variable, the function does not need a name since it can be accessed through the variable name.  */
const age = 23;
const function1 = function(){
  console.log('hello again')
};
console.log(function1);
console.log(typeof function1);
function1();
// Since a function is a variable we can also store it inside an object
const object1 = {
  age: 23,
  fun: function (){
    console.log('hello Again for the third time');
  }
}
object1.fun();
/* A value(function) can also be passed into a function. Passing a function into another function. The function being passed in is called a callback(callback function) */
function display(param){
  console.log(param);
}
display(2);
function run(param){
  param();
}
run(function(){
  console.log('hello4');
});
/* Asynchronous Code - The computer does not wait to execute an above line of code before executing the next line. A line of code below can be executed before a line of code that is above it. Unlike Synchronous Code - Where the computer waits for one line of code to execute before executing the next. * /
/* setTimeout() a javascript feature (built-in function) that allows us to run a function in future. It takes two agruments: the first is the function we would like to run in future and the second is how long to wait(in milliseconds: 1000 milliseconds is equivalent to 1 second) before running the function. Basically this function set out a timer, immediately goes to the next line of code and then calls the function once the set time has lapsed. */
setTimeout(function(){
  console.log('timeout');
  console.log('timeout2');
}, 3000);
console.log('next line');
/* setInterval() another built in function uses the same two parameters as the setTimout() function. The difference is that setInterval runs the function continuously after the set timer has elapsed. */
/* setInterval(function(){
  console.log('interval');
}, 3000);
console.log('next line 2'); */
/* How to stop setInterval(). setInterval() returns a number, this number is like an ID. We can use this ID to stop the interval. This ID can be stored in a variable and passed inside the clearInterval() function as an argument.*/
/* forEach() method of the array class is another way to loop through an array. This method loops through an array and for each value it will save the value as an agrument and run the function. This is actually the prefered way to loop through an array, because it is easier to read than a for loop.  */
['Make dinner','Wash dishes','watch youtube'].forEach(function(value){
  console.log(value);
});
/* forEach() has another feature, the function inside the forEach() method can be passed a second agrument index which returns the index of a value in an array*/
const everyDay = ['Train','Code', 'Nap','Eat','Sleep'];
everyDay.forEach(function(value,index){
  console.log(index);
  console.log(value);
});
/* The forEach() method does not have continue, so you have to use the return statement instead. Example let's skip napping. */
everyDay.forEach(function(value,index){
  if(value === 'Nap')return;
  console.log(index);
  console.log(value);
});
/* The forEach() method also lacks the break statement, so if you have to exit a loop early use a regular loop instead */
 
