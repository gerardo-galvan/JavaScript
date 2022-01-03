const numberDigits = x => {

  //If the variable x is between 0 and 9, return the string 'One digit: N', where N is the value of x.    
    if(x >= 0 && x <= 9) {
      return `One digit: ${x}`

  // If the variable x is between 10 and 99, return the string 'Two digits: N', where N is the value of x.    
    } else if(x >= 10 && x <= 99){
      return `Two digits: ${x}`;

  //Any other value of x, including negative numbers, return the string 'The number is: N', where N is the value of x.  
    } else {
      return `The number is: ${x}`;
    }
  }
  
  console.log(numberDigits(4));