const _ = {

    // Add a method to our _ object called clamp and add three parameters to this method: number, lower, and upper.
    clamp (number,lower, upper) {
     
    // Create a variable called lowerClampedValue that is set equal to the return value of Math.max() called with number and lower.
    let lowerClampValue = Math.max(number,lower);

    // Create a variable called clampedValue that is set equal to the return value of Math.min() called with lowerClampedValue and upper.
    let clampedValue = Math.min(lowerClampValue, upper);
    
    // Return clampedValue as our final value from the method.
    return  clampedValue;
    },


inRange (number, start, end) {
    if(end === undefined) {
     end = start; 
     start = 0;
    
    } 
    
    if( start > end) {
      let temp = end; 
       end = start;
       start = temp;
    }
    
    let isInRange =  start <= number && number < end;  
    
    return isInRange; 
    
    },
    
    words(string){
      let words = string.split(' ');
    return words;
    },
    
    pad(string,length) {
     
     if(string.length >= length){ 
     return string;
     };
    
    let startPaddingLength = Math.floor((length - string.length) / 2);
    let endPaddingLength = length - string.length - startPaddingLength;
    let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    
    
    return paddedString;
    },
    
    has(obj, key) {
    let hasValue = obj[key];
    if(hasValue != undefined) { 
    return true;
    } return false;
    },
    
    invert(object) {
    let invertedObject = {};
    
     for(let key in object){
       const originalValue = object[key];
        invertedObject[originalValue] = key;
     }
    return invertedObject;
    },
    
    findKey (obj, predicate) {
    
    for(let key in obj){
      let value = obj[key];
      let predicateReturnValue = predicate(value);
      if(predicateReturnValue) {
        return key;
      };
    };
    undefined
    return undefined;
    },


drop (arr, n) {
    if(n === undefined) {
      n = 1;
    }
    let droppedArray = arr.slice(n, arr.length);
    return droppedArray; 
  },
  
  dropWhile (arr, predicate) {
      const callback_function = (element, index) =>{
        return !predicate(element,index, arr);
      }
      let dropNumber = arr.findIndex(callback_function);
      let droppedArray = this.drop(arr,dropNumber);
      return droppedArray;
  },
  
  
  chunk (arr, size=1) {
  
    let arrayChunks = [];
  
    for(let i=0; i<arr.length; i += size) {
      let arrayChunk = arr.slice(i, i+size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  
  },
    
    };
    
    
    // Do not write or modify code below this line.
    module.exports = _;