// Create a factory function named robotFactory that has two parameters model and mobile. 
const robotFactory = (model, mobile) => {
  // Make the function return an object. 
  return {
    /* In the object, add a key of model with the value of the model parameter. 
       Add another property that has a key of mobile with a value of the mobile parameter. */

    model: model,
    mobile: mobile,

    /* Property Value Shorthand
    model,
    mobile,
    */

    // Add a method named beep without a parameter that will log 'Beep Boop' to the console.
    beep() {
      console.log('Beep Boop');
    }
  }
  }
  
  // Assign to tinCan the value of calling robotFactory with the first argument of 'P-500' and the second argument of true.
  const tinCan = robotFactory('P-500', true);
  
  // Call .beep() on tinCan.
  tinCan.beep();


// Use destructured assignment to create a const variable named functionality that extracts the functionality property of robot.
// const { propertyName } = obj;   
const { functionality } = robot;

console.log(functionality);

//  Since functionality is referencing robot.functionality we can call the methods available to robot.functionality simply through functionality.
functionality.beep();