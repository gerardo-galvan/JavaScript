const jumbledNums = [123, 25, 78, 5, 9]; 
 
// const lessThanTen = declares a new variable that stores the returned index number from invoking .findIndex().

/*The callback function is an arrow function that has a single parameter, num. 
Each element in the jumbledNums array will be passed to this function as an argument. */

/*num < 10; is the condition that elements are checked against. 
.findIndex() will return the index of the first element which evaluates to true for that condition. */

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});


const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animals => {
  return animals === 'elephant';
})


const startsWithS = animals.findIndex(animals => {
  return animals[0] === 's';
})