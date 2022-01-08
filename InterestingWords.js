const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

/* The .some() method returned true, which means there are some words in the array that are shorter than six characters. 
Use the .filter() method to save any words longer than 5 characters to a new 
variable called interestingWords, declared with const. */

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => {
  return word.length > 5;
})
 
 
 console.log(interestingWords.every((word) => { 
   return word.length > 5;
 } ));
