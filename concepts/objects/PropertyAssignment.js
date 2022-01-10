let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Write your code below
  
  // asign new color to color property
  spaceship.color = 'glorious gold';
  
  // add new property with numeric value
  spaceship.numEngines =  3;
  
  // delete operator remove 'Secret Mission' property form spaceship object
  delete spaceship['Secret Mission'];