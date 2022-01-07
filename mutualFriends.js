const bobsFollowers =['mark', 'tim', 'jim', 'lalo'];
const tinasFollowers = ['james', 'tim','lalo'];
const mutualFollowers = [];

for(let i=0; bobsFollowers.length;i++){
  for(let t=0; t < tinasFollowers.length; t++) {
    if(bobsFollowers[i] === tinasFollowers[t]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}