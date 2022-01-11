const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

// using array built-in method
const reversed = array1.reverse();
console.log('reversed:', reversed);


// creating own array reverse function 
const reverseArray = arr => {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}
/*
// Alternate solutions:

// Using the .unshift() method
const reverseArray = arr => {
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        reversed.unshift(arr[i]);
    }
    return reversed
}

// As a function declaration:
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}
*/

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)); 