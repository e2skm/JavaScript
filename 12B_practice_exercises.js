// Lesson 12: Advanced functions practice exercises part 2
// Function that takes two numbers and multiplies them
const multiply = (num1,num2) => num1 * num2;
console.log(multiply(3,2));
console.log(multiply(7,10));
// Function that takes in an array of numbers and returns the number of postive values in that array
function countPositive(array){
  let count = 0;
  array.forEach(value => {
    if (value >= 0) count++;    
  });
  return count;
}
console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));
/* Function that takes in an array of numbers and an increment number and adds each number in the array by the increment number and returns a new array */
const addNum = (array,num) => array.map(value => value + num);
console.log(addNum([1,2,3],2));
console.log(addNum([-2,-1,0,99],2));
// Function to take an array of food and return a new array without the string eggs 
const removeAllEggs = foods => foods.filter( value => value !== 'egg');
const foods = ['egg', 'apple','egg', 'egg', 'ham'];
console.log(removeAllEggs(foods));
// Function to take an array of food and return a new array without the first 2 occurences of the string eggs 
/*const remove2Eggs = foods => foods.filter(value => value !== 'egg');
console.log(remove2Eggs(foods)); */
function removeEggs2(foods){
  let eggsFound = 0;
  foods.filter(value => {
   
  });
}
console.log(removeEggs2(foods));