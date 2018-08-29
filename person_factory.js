function descriptor (value) {
  let descriptor = Object.create(null);
  descriptor.value = value;
  descriptor.enumerable = true;
  return descriptor;
}

const person = {
  setName: function (name) {
    try {
      if (typeof name != 'string') throw 'name must be a string';
    }
    catch(error) {
      throw error;
    }
    Object.defineProperty(this, 'name', descriptor(name));
  },
  setBirthDate: function (birthDate) {
    try {
      if (typeof birthDate != 'number') throw 'birth date must be a number';
    }
    catch(error) {
      throw error;
    }
    Object.defineProperty(this, 'birthDate', descriptor(birthDate));
  },
  setDeathDate: function (deathDate) {
    try {
      if (typeof deathDate != 'number') throw 'death date must be a number';
      if (typeof this.birthDate == undefined) throw 'birth date must be defined';
      if (deathDate < this.birthDate) throw 'birth date must precede death date';
    }
    catch(error) {
      throw error;
    }
    Object.defineProperty(this, 'deathDate', descriptor(deathDate));
  }
};

function createPerson(name, birthDate, deathDate) {
  let newPerson = Object.create(person);
  try {
    newPerson.setName(name);
    newPerson.setBirthDate(birthDate);
    newPerson.setDeathDate(deathDate);
  }
  catch(error) {
    console.log('Invalid person: ' + error);
  }
  return newPerson;
};
