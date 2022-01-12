// create new array  with capitalized letters and an exclamation point appended to the end
const shoutGreetings = arr => 
arr.map(word => word.toUpperCase() + '!');
 

 
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
 