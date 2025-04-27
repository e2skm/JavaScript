// Lesson 12 Part 2: Advanced functions
/* Arrow functions - are a shorter way of creating functions. They work the same way as a regular function but instead of using the function keyword they use an arrow (=>). They can use 0,1 or multiple parameters and also return a value*/
const regularFunction = function(){
  console.log('hello');
}
regularFunction();

const arrowFunction = () => {
  console.log('hello');
}
arrowFunction();
// Differences:
/* Arrow functions have a few shortcuts that regular functions do not have. Example whenever an arrow function has one parameter the braces () are optional*/
const oneParam = param => {
  console.log(param + 1);
};
oneParam(2);
/* Whenever an arrow function contains one line of code in it's body the body can be on the same line.Also the is on need to have a return statement.*/
const oneLine = () =>  2 + 3;
console.log(oneLine());
/* Whenever we a passing a function into another function it is reccommended to use arrow functions. Since they are easier to read*/
['Train','Code','Nap','Eat','Sleep'].forEach((value,index) => {
  if(value == 'Nap') return;
  console.log(`${index + 1}: ${value}`);
}); 
/* Arrow functions can also be used inside an object. Both methods work the same but the second (shorthand) version is reccommended since it is easier to read.*/
const object2 = {
  method: () => {

  },
  method(){

  }
};
/* Ever html element has a .addEventListener() method, which let's us run some code when we interact with the element. This method takes in two arguments the first argument is the event - which  specifies the type of interaction we are listening for. The second argument is a function we want to execute. .addEventListener() has some advantages over the onclick attribute: first it let's'us add mulitiple event listeners for an event. Thus it is best to use .addEventListener() over the onclick="" attribute. */
const buttonElement = document.querySelector('.js-button');
const eventListener = () => {
  console.log(`${buttonElement.innerHTML} clicked`);
}
buttonElement.addEventListener('click', eventListener);
buttonElement.addEventListener('click', () => {
  console.log(`${buttonElement.innerHTML} clicked2`);
});
/* Another advantage is that we can remove an event listener using removeEventListener(). This method also takes in two parameters. The first is the event and the second is a function that we want to remove. */
buttonElement.removeEventListener('click',eventListener);
// Two more array metods: .filter() .map()
/* .filter() works like the forEach(). We pass two arguments: the first is the value and the second is the index. .filter() creates a new array depending on the boolean result of each value in the array. Whenever the inner function returns true for a particular value that value will be part of the new array.*/
const postiveNumbs = [1, -3, 5].filter((value) =>{
  /*if(value < 0){
    return false;
  }else{
    return true;
  } */
 return value >= 0;
});
console.log(postiveNumbs);
/* .map() works just like .filter() and .forEach(). .map() creates a new array and whatever we return will be added to the new array. Basically .map() transforms an array into another array based on the return value. */
const doubledNums = [1, 1, 3].map((value) =>{
  return value * 2;
});
console.log(doubledNums);
// Shortcuts of arrow functions
/* Whenever an arrow function uses one argument the () braces are optional, if a function only has one line in it's body the {} curly braces are optional and the body can be on the same line as function also the return statement can be removed. So the above function can be written like:  */
console.log([1, 1, 3].map(value => value * 2));
/* Closure this is a feature of function which means that ifa function has access to a value, it will always have access to that value. The value gets enclosed (packaged together) with the function. Closures naturally happen as we write javascript code, there are some advanced techniques that we can write with closures but they are not used very often*/







