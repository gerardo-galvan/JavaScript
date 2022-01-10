const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo () {
      // this keyword references the calling object which provides access to the calling object’s properties. 
      // * avoid using arrow functions when using this in a method.
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
    }
  };
  
  console.log(robot.provideInfo());