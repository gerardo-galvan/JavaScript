

const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday' ) {
      return 7.5;
    } else if (day === 'wednesday' ) {
      return 7.5;
    } else if (day === 'thursday' ) {
      return 7.5;
    } else if (day === 'friday' ) {
      return 7.5;
   } else if (day === 'saturday' ) {
      return 7.5;
    } else if (day === 'sunday' ) {
      return 7.5;
    }};
  console.log(getSleepHours('tuesday')); 
  
  const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;
  
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(6);
   
  if (actualSleepHours === idealSleepHours) {
    console.log('Great job! You sleep the recommmended ' +idealSleepHours+ ' hour(s) per week.');
  }else if (actualSleepHours > idealSleepHours){
  console.log('You sleep too much')
  } else  
  {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you need this week. Get some rest dude.')
  }
  };
  console.log(calculateSleepDebt());
   
  
  