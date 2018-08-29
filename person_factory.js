const person = Object.create({}/*, {
  name: {
    get() {return name;},
    set(newName) {
      try {
        if (typeof newName != 'string') throw 'name must be a string';
      }
      catch(error) {
        throw error;
      }
      name = newName;
    }
  },
  birthDate: {
    get() {return birthDate;},
    set(newBirth) {
      try {
        if (typeof newBirth != 'number') throw 'birth date must be a number';
      }
      catch(error) {
        throw error;
      }
      birthDate = newBirth;
    }
  },
  deathDate: {
    get() {return deathDate;},
    set(newDeath) {
      try {
        if (typeof newDeath != 'number') throw 'death date must be a number';
        if (typeof this.birthDate == undefined) throw 'birth date must be defined';
        if (newDeath < this.birthDate) throw 'birth date must precede death date';
      }
      catch(error) {
        throw error;
      }
      deathDate = newDeath;
    }
  }
}*/);

function createPerson(name, birthDate, deathDate) {
  newPerson = Object.create(person);
  try {
    newPerson.name = name;
    newPerson.birthDate = birthDate;
    newPerson.deathDate = deathDate;
    return newPerson;
  }
  catch(error) {
    console.log('Invalid person: ' + error);
  }
}
