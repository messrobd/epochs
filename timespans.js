const timeSpans = {
  people: [],
  measureTimeSpan: function() {
    if (this.people.length === 0) {
      return undefined;
    }
    let startTime = this.people[0].birthYear,
        endTime = this.people[0].deathYear;
    this.people.forEach(function(person){
      startTime = person.birthYear < startTime ? person.startTime : startTime;
      endTime = person.deathYear > endTime ? person.deathYear : endTime;
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
      timeSpan = person.deathYear - person.birthYear;
  timeSpans.append(
  '<div class="time-span" style="' +
  'width: ' + timeSpan + 'px; ' +
  '"></div>');
}
