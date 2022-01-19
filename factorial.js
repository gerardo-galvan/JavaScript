// Takes a number as an argument and returns the factorial of the number.

const factorial = num => {
    let result = 1;
    for(let i=num; i>0; i--) {
      result *= i;
    }
    return result;
  }
  
  // returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 
  console.log(factorial(6))