const timeSpans = {
  people: [],
  measureTimeSpan: function() {
    if (this.people.length === 0) {
      return undefined;
    }
    let startTime = this.people[0].birthDate,
        endTime = this.people[0].deathDate;
    this.people.forEach(function(person){
      startTime = person.birthDate < startTime ? person.startTime : startTime;
      endTime = person.deathDate > endTime ? person.deathDate : endTime;
    });
    return [startTime, endTime];
  },
  addPerson: function(person) {
    this.people.push(person);
    this.measureTimeSpan();
  }
}

function renderTimeSpan(person) {
  let timeSpans = $('#time-spans'),
      timeSpan = person.deathDate - person.birthDate;
  timeSpans.append(
  '<div class="time-span" style="' +
  'width: ' + timeSpan + 'px; ' +
  '"></div>');
}
