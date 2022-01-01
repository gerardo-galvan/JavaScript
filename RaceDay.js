
let raceNumber = Math.floor(Math.random() * 1000);
// variable that indicates whether a runner registered early or not.

const registeredEarly = false;
const runnerAge = 16;

if (runnerAge > 18 && registeredEarly){
raceNumber += 1000;
}
if ( runnerAge > 18 && registeredEarly ) {
console.log(`Runner ${raceNumber} your race time is 9:30am.`);
} else if (runnerAge > 18 && (!registeredEarly)) {
console.log(`Runner ${raceNumber} your race time is 11:00am.`);
} else if ( runnerAge < 18 && registeredEarly ){
console.log(`Runner ${raceNumber} your racetime is 12:30pm.`);
} else {
console.log('See the registration desk');
}
