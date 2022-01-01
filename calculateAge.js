// varabile for current age
let myAge = 32;
// new variable set to 2 years
let earlyYears = 2; 
earlyYears *= 10.5;
// subtract 2 years from myAge
let laterYears = myAge - 2;
// calculate number of dog years accounted for later years
laterYears *= 4;
 
// calculate my age in dog years
let myAgeInDogYears = earlyYears + laterYears;
// uses string built-in method to convert text to lowercase
let myName = 'GERARDO'.toLowerCase(); 

console.log(`My name is ${myName}. I am  ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);