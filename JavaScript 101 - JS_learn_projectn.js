// JavaScript 101 - JS_learn_projectn 
// Function to greet someone based on their name, age and gender
function greet(surname,age,gender)
{
    let title = " "
    let accessStr = " "

    if(age>=18){
        accessStr = "Congratulations you can enter.";
    }else{
        let yearsLeft = 18 - age;
        let yearToComeback = 2025 + yearsLeft;
        accessStr = "Opps you are not old enough. Comeback after "+ yearsLeft + " years in " + yearToComeback;        
    }
   
   if(gender === "Male"){
    title = "Mr"; 
    }else{
    title = "Ms/Mrs";    
   }
return "Hello" + " " + title + " " + surname + " " + accessStr;
}

console.log(greet("Sekoma",22,"Male"));
console.log(greet("Tladi",32,"Female"));
console.log(greet("Smith",16,"Male"));
console.log(greet("Thlou",12,"Female"));

