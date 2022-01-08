const numbers = [1, 2, 3, 4, 5]; 
 
// bigNumbers will store the return value of calling .map() on numbers.

// numbers.map will iterate through each element in the numbers array and pass the element into the callback function.

/* return number * 10 is the code we wish to execute upon each element in the array.
 This will save each value from the numbers array, multiplied by 10, to a new array. */
 
const bigNumbers = numbers.map(number => {
  return number * 10;
});