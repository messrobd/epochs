function descriptor (value) {
  let descriptor = Object.create(null);
  descriptor.value = value;
  descriptor.enumerable = true;
  return descriptor;
}

const epoch = {
  setName: function (name) {
    try {
      if (typeof name != 'string') throw 'name must be a string';
    }
    catch(error) {
      throw error;
    }
    Object.defineProperty(this, 'name', descriptor(name));
  },
  setStartYear: function (startYear) {
    try {
      if (typeof startYear != 'number') throw 'start Year must be a number';
    }
    catch(error) {
      throw error;
    }
    Object.defineProperty(this, 'startYear', descriptor(startYear));
  },
  setEndYear: function (endYear) {
    try {
      if (typeof endYear != 'number') throw 'end Year must be a number';
      if (typeof this.startYear == undefined) throw 'start Year must be defined';
      if (endYear < this.startYear) throw 'start Year must precede end Year';
    }
    catch(error) {
      throw error;
    }
    Object.defineProperty(this, 'endYear', descriptor(endYear));
  }
};

function createEpoch(name, startYear, endYear) {
  let newEpoch = Object.create(epoch);
  try {
    newEpoch.setName(name);
    newEpoch.setStartYear(startYear);
    newEpoch.setEndYear(endYear);
  }
  catch(error) {
    console.log('Invalid person: ' + error);
  }
  return newEpoch;
};
