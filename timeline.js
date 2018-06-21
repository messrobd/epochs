const timeline = {
  people: [],
  measureTimeline: function() {
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
    this.measureTimeline();
  }
}

function renderTimeSpan(person) {
  let timeline = $('#timeline'),
      timeSpan = person.deathDate - person.birthDate;
  timeline.append(
  '<div style="' +
  'width: ' + timeSpan + 'px; ' +
  'height: 10px;' +
  '"></div>');
}
