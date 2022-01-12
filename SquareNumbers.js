const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num;


// Takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.
const squareNums = arr => {
return arr.map(toSquare);
}

console.log(squareNums(numbers))