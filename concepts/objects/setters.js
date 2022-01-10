const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
  
    // Setter methods which reassign values of existing properties within an object. 

    // Add a setter method named numOfSensors using the set keyword. Provide a parameter of num.
    set numOfSensors(num) {

    // If both conditions are met, reassign this._numOfSensors to num.
      if(typeof num === 'number' && num >= 0){
        this._numOfSensors = num;
      } else {
        console.log('Pass in a number that is greater than or equal to 0');
      }
  
    }
    
  };
  
  // Use the numOfSensors setter method on robot to assign _numOfSensors to 100.
  robot.numOfSensors = 100;
  
  
  console.log(robot.numOfSensors)