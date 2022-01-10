let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    disabled : false
  };
  
  // Write your code below

  // greenEnergy function that has an object as a parameter
  let greenEnergy = objectParam => {

  //  sets that object’s 'Fuel Type' property to 'avocado oil'.
   objectParam['Fuel Type'] = 'avocado oil'
  };
  

  let remotelyDisable = objectParam2 => {
      
    // obj2 parameter  sets (or reassigns) object’s disabled property to true.
    objectParam2.disabled = true;
  };
  
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  console.log(spaceship);