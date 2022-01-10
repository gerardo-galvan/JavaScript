const robot = {
    _model: '1E78V2',
    _energyLevel: 100,

    // Getters can perform an action on the data when getting a property.
    get energyLevel() {
      // Condition that checks if energy level value is a number
      if(typeof this._energyLevel   ===  'number') {
          // In a getter, we can access the properties of the calling object using this keyword.
        return `My current energy level is ${this._energyLevel}`;
      } else {
        return 'System malfunction: cannot retrieve energy level'
      
      }
    }
  };
  
  console.log(robot.energyLevel);