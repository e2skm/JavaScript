// Temperature_Convertor -JS_learn_projectn 
// Formulae: f = (c * 9 / 5) + 32 and c = (f - 32) * 5 / 9
// Function to generate a random temperature between 65 and -20
function randomTemp(){
    return Math.round(Math.random() * 65 - 20);
}

// Function to get measurement either degrees Celsius or Fahrenheit
function randomMeasure(){
    let y = Math.round(Math.random () * 1 + 1);
    let measure = "";
    if(y === 1){
        measure = "Celsius";
    }else{
        measure = "Fahrenheit";
    } 
    return measure;
}

// Function to convert
function convertTemp(temp,measure){
    let newTemp = 0;
    let newMeasure = "";
    if(measure === "Fahrenheit"){
        newTemp = Math.round((temp - 32) * 5 / 9);
        newMeasure = "Celsius";
    }else{
      newTemp =  Math.round((temp * 9 / 5) + 32);
      newMeasure = "Fahrenheit";
    }
    return console.log(`The temperature of ${temp} degrees ${measure} is equal to ${newTemp} degrees ${newMeasure}`);
}

let temp = randomTemp();
let measure = randomMeasure();
convertTemp(temp,measure);
convertTemp(25,"Celsius");
convertTemp(86,"Fahrenheit");
convertTemp(-5,"Celsius");

