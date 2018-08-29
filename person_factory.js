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
  setBirthYear: function (birthYear) {
    try {
      if (typeof birthYear != 'number') throw 'birth Year must be a number';
    }
    catch(error) {
      throw error;
    }
    Object.defineProperty(this, 'birthYear', descriptor(birthYear));
  },
  setDeathYear: function (deathYear) {
    try {
      if (typeof deathYear != 'number') throw 'death Year must be a number';
      if (typeof this.birthYear == undefined) throw 'birth Year must be defined';
      if (deathYear < this.birthYear) throw 'birth Year must precede death Year';
    }
    catch(error) {
      throw error;
    }
    Object.defineProperty(this, 'deathYear', descriptor(deathYear));
  }
};

function createPerson(name, birthYear, deathYear) {
  let newPerson = Object.create(person);
  try {
    newPerson.setName(name);
    newPerson.setBirthYear(birthYear);
    newPerson.setDeathYear(deathYear);
  }
  catch(error) {
    console.log('Invalid person: ' + error);
  }
  return newPerson;
};
