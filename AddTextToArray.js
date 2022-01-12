let convertToBaby = arr => {
    let animals =[];
    for(let i=0; i < arr.length; i++) {
     animals.push(`baby ${arr[i]}`);
    };
    return animals;
}


const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 
 