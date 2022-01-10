const robot = {
    // place an underscore _ before the name of a property to mean that the property should not be altered. 
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  
  
  robot._energyLevel = 'high';
  
  robot.recharge();
  // prints 'Recharged! Energy is currently at high30%.'