let substring = 'cake';

function containsCake(string) {
  if(string.includes(substring)){
    return true;
  }else {
    return false;
  }
}




// Should return true
console.log("containsCake('I think cake is my soul mate.') returns: " + containsCake('I think cake is my soul mate.'));

// Should return false
console.log("containsCake('Pie is certainly the coolest dessert.') returns: " + containsCake('Pie is certainly the coolest dessert.'));