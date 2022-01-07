let input = 'turpentine and turtles';

// an array of vowels to be extracted from the input variable
let vowels = ['a', 'e','i','o','u'];

//a variable called results array that will store the vowels from the input string
let resultArray = [];

// a loop that iterates through each letter in input
for(let i=0; i < input.length; i++){

  // As you loop through the input, iterate through the vowels array
    for(let v=0; v < vowels.length; v++){  
    // if the input and vowel match, push to resultsArray
      if(input[i] === vowels[v]) {     
      resultArray.push(input[i]);
      }
    }

// If the input is e after checking for matches, add another instance of e so you wil get 'e', 'e'
      if(input[i] === 'e'){
      resultArray.push(input[i]);
    }

  // If the input is e after checking for matches, add another instance of e so you wil get 'e', 'e'
    if(input[i] === 'u'){
      resultArray.push(input[i]);
    }
    }
 

console.log(resultArray.join('').toUpperCase());

