// Lesson 11: Arrays and Loops practise exersises
// Function to search an array of strings for a string and return its index
function findIndex(array,word){
  for(let i = 0; i < array.length; i++){
    if(array[i] === word){
      return i;
    }
  }
  return -1;
}
// Test above function
const stringArray = ['hello', 'world', 'search','good','search'];
const colors = ['green', 'red', 'blue', 'red'];
console.log(findIndex(stringArray,'search'));
console.log(findIndex(colors, 'red'));
console.log(findIndex(colors, 'yellow'));
// Function to remove all eggs from an array of food
function removeAllEggs(food){
  const foodWithOutEggs = [];
  for(let i = 0; i < food.length; i++){
    if(food[i] === 'egg'){
      continue;      
    }
    foodWithOutEggs.push(food[i]);
  }
  return foodWithOutEggs;
}
// Test above functioin
const food = ['egg','apple', 'egg', 'egg','ham'];
console.log(removeAllEggs(food));
// Function to remove only the fisrt two eggs
function removeTwoEggs(food){
  const foodWithOutTwoEggs = [];
  let eggsFound = 0;
  for(let i = 0; i < food.length; i++){
    if(food[i] === 'egg' && eggsFound < 2){
      eggsFound ++; 
      continue;      
    }else{
      foodWithOutTwoEggs.push(food[i]);
    }
  }
  return foodWithOutTwoEggs;
}
// Test above function
console.log(removeTwoEggs(food));
// Reverse order of array. The reverse method modifies the original array
foodReversed = food.slice().reverse();
console.log(removeTwoEggs(foodReversed));
console.log('The original array:',food);
console.log('The modified array',foodReversed);
// Function to return an array with only unique values (zero duplicates)
function unique(array){
  const uniqueArray = [];
  for(let i = 0; i < array.length; i++){
    let found = false;
    for(let j = 0; j < uniqueArray.length; j++){
      if(array[i] === uniqueArray[j]){
        found = true;
        break;
      }
    }  
    if(!found){
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}
console.log(unique(food));
console.log(unique(colors));
