const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 

// const shortWords = declares a new variable that will store the returned array from invoking .filter().


/* The callback function is an arrow function that has a single parameter, word. 
Each element in the words array will be passed to this function as an argument. */

const shortWords = words.filter(word => {


/* word.length < 6; is the condition in the callback function.
   Any word from the words array that has fewer than 6 characters will be added to the shortWords array. */
  return word.length < 6;
});