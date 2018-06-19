const person = Object.create({}, {
  name: {},
  birthDate: {},
  deathDate: {}
});

function createPerson(name, birthDate, deathDate) {
  newPerson = Object.create(person, {
    name: {value: name},
    birthDate: {value: birthDate},
    deathDate: {value: deathDate}
  });
  return newPerson;
}
