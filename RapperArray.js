const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

 // Log each element from rapperArray in a for loop with the iterator variable i.
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
 
  /* Add a break inside your loop’s block that breaks out of the loop 
    if the element at the current index in the rapperArray is 'Notorious B.I.G.'. */
    if(rapperArray[i] === 'Notorious B.I.G.'){ 
    break;
  }
    
}

 console.log(`And if you don't know, now you know.`)