const person = {
    _firstName: 'John',
    _lastName: 'Doe',

    // Getters are methods that get and return the internal properties of an object. 
    get fullName() {
      if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
      } else {
        return 'Missing a first name or a last name.';
      }
    }
  }
   
  // To call the getter method: 
  person.fullName; // 'John Doe'