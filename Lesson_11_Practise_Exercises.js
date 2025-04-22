// Lesson 11: Arrays and Loops Exercises
// Create an array
const nums = [10, 20, 30];
console.log(nums);
// Modify the last value in the array 
nums[2]  = 99;
console.log(nums);
// Function to get the last value in an array
function getLastValue(array){
  return array[array.length - 1];
}
// Testing above array
const testArray = [10, 20, 30, 40, 50, 60, 70];
const lastValue = getLastValue(testArray);
console.log(lastValue);
console.log(getLastValue(nums));
// Function that swaps/ reverses the order of values in an array
function arraySwap(array){
  swapedArray = [];

  for(let i = 0; i < array.length; i++){
    swapedArray.push(array[array.length - (i  + 1)]);
  }
  return swapedArray;
}
// Test above function
console.log(`The array: ${testArray} reversed results in: ${arraySwap(testArray)}`);
const testArray2 = ['Itumeleng','Ntsako','Abegail','Molebogan'];
console.log(`The array: ${testArray2} reversed results in: ${arraySwap(testArray2)}`);
// Counting loops
// For loops
for(let i = 0; i <= 10; i+=2){
  console.log(i);
}
for(let i = 5; i >= 0; i--){
  console.log(i);
}
// While loops
let i = 0;
while(i <= 10){
  console.log(i);
  i += 2;
}
i -= 7;
while(i >= 0){
  console.log(i);
  i--;
}
// loop to increment array values by 1
function incrementArrayNums(array,value){
  const newArray = [];
  for(let i = 0; i < array.length; i++){
    newArray.push(array[i] + value);
  }
  return newArray;
}
// Test above function
const arrayIncremented = incrementArrayNums(testArray,3)
console.log(`The orginal array: ${testArray} the 3 increment array: ${arrayIncremented}`);
// Function to add values from two arrays
function addArrays(array1,array2){
  const addedArray = []; 
  if(array1.length === array2.length){
    for(let i = 0; i < array1.length; i++){
      addedArray.push(array1[i] + array2[i]);
    }
    return addedArray;
  }else{
    console.log(`Invalid the two arrays do not have an equal number of values. \nThe first array contains: ${array1.length} values while the second array contains: ${array2.length}.`);
  }
}
// Test above function
const testArray3 = addArrays(testArray,nums);
console.log(testArray3);
const testArray4 = addArrays(testArray,arrayIncremented);
console.log(testArray4);
const testArray5 = arraySwap(arrayIncremented); 
const testArray6 = addArrays(testArray4,testArray5);
console.log(testArray6);
const testArray7 = addArrays(testArray5,arrayIncremented);
console.log(testArray7);
//Function to count postive numbers in an array
function countPositive(array){
  let positiveNumCount = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] >= 0){
      positiveNumCount++;
    } 
  }
  return positiveNumCount;
}
// Test above function
const testArray8 = [0,14,-5,9,-22,20,-100];
const positiveNumbers = countPositive(testArray8);
console.log(`In the array: ${testArray8} there are ${positiveNumbers} positive values and ${testArray8.length - positiveNumbers} negative values`);
// Function to get the minimum and maximum numbers in an array
function minMax(array){
  const lowestAndHighest = {min:array[0], max:array[0]};
  
  for(let i = 0; i < array.length; i++){
    if(lowestAndHighest.max < array[i]) lowestAndHighest.max = array[i];
    if(lowestAndHighest.min > array[i]) lowestAndHighest.min = array[i];
  }
  return lowestAndHighest;
}
// Test above function
console.log('Given the array:', testArray8, 'the min and max are:', minMax(testArray8));
console.log('Given the array:', testArray7, 'the min and max are:', minMax(testArray7));
console.log('Given the array:', testArray6, 'the min and max are:', minMax(testArray6));
// Function to count the frequency of words in an array
function countWords(array){
  const wordFrequency = {};
  for(let i = 0; i < array.length; i++){
    const word = array[i];
    wordFrequency[word]? wordFrequency[word]++: wordFrequency[word] = 1;
  }
  return wordFrequency;
}
// Test above function
testArray2[3] = 'Thato';
console.log('Given the array:', testArray2, 'the word count is as follows: ', countWords(testArray2));
const fruits = ['Apple', 'Mango', 'Strawberry', 'Strawberry', 'Orange', 'Banana', 'Pear', 'Apple', 'Apple', 'Pear', 'Mango'];
console.log('Given the array:', fruits, 'the word count is as follows: ', countWords(fruits));


