let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// create object named 'alienShip'
let alienShip = {

  // method that will console.log the retreatMessage. 
  retreat() {
    console.log(retreatMessage);
  },

  // this method, .takeOff(), will console.log() the string 'Spim... Borp... Glix... Blastoff!'.
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
  
};

// Invoke your two methods: first .retreat() then .takeOff().
alienShip.retreat();
alienShip.takeOff();