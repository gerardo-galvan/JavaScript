const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

 
// sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) 
const sortSpeciesByTeeth = arr =>   arr.sort(( speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth);

