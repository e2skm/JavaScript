/* Length_Convertor */
function milesToKilometers(unit){
  return unit * 1.6;
}
function kilometersToMile(unit){
  return unit / 1.6;
}
function milesToFeet(unit){
  return unit * 5280;
}
function feetToMiles(unit){
  return unit / 5280;
}
function kilometersToFeet(unit){
  return unit * 3281;
}
function feetToKilometers(unit){
  return unit / 3281;
}
function convertLength(length, from, to){
  let convertedLength = 0;

  if(from === to){
    console.log(`${length} ${to}`);
  }else if((from === 'km' || from === 'miles' || from === 'ft') && (to === 'km' || to === 'miles' || to === 'ft')){
    if(from === 'km'){
      convertedLength = to === 'miles' ? kilometersToMile(length) : kilometersToFeet(length);
    }else if(from === 'miles'){
      convertedLength = to === 'km' ? milesToKilometers(length) : milesToFeet(length);
    }else{
      convertedLength = to === 'miles' ? feetToMiles(length) : feetToKilometers(length);
    }
    console.log(`The length ${length} ${from} is equivalent to  ${convertedLength} ${to}`);
  }else if(to !== 'km' && to !== 'miles' && to !== 'ft'){
    console.log(`Invalid unit: ${to} enter 'miles', 'km' or 'ft'`);
  }else{
    console.log(`Invalid unit: ${from} enter 'miles', 'km' or 'ft'`);
  }
}
/* Call function  */
convertLength(50,'miles','km');
convertLength(32, 'km', 'miles');
convertLength(50,'km', 'km');
convertLength(5, 'miles', 'km');
convertLength(5, 'miles', 'ft');
convertLength(5, 'km', 'ft');
/* Testing function with invalid to or from units*/
convertLength(500000,'cm', 'km');
convertLength(5, 'km', 'lbs');
convertLength(10, 'miles', 'meters');
convertLength(38, 'inches', 'ft')

