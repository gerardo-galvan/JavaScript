const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// Built-in methods for Objects
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Copy all of the properties of an object into a new object. Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true},robot) ;

console.log(newRobot);