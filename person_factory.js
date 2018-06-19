const person = Object.create({}, {
  name: {
    get() {return name;},
    set(newName) {
      try {
        if (typeof newName != 'string') throw 'name must be a string';
      }
      catch(error) {
        return error;
      }
      name = newName;
    }
  },
  birthDate: {
    get() {return birthDate;},
    set(newBirth) {
      if (typeof newBirth != 'number') {
        throw 'birth date must be a number';
      }
      birthDate = newBirth;
    }
  },
  deathDate: {
    get() {return deathDate;},
    set(newDeath) {
      if (typeof newDeath != 'number') {
        throw 'death date must be a number';
      }
      if (typeof this.birthDate == undefined || newDeath < this.birthDate) {
        throw 'birth date must preceed death date';
      }
      deathDate = newDeath;
    }
  }
});

function createPerson(name, birthDate, deathDate) {
  newPerson = Object.create(person);
  try {
    newPerson.name = name;
    newPerson.birthDate = birthDate;
    newPerson.deathDate = deathDate;
  }
  catch(error) {
    console.log('Invalid person: ' + error);
  }
  return newPerson;
}
