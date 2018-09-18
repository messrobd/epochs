const epochs = {
  epochs: [],
  measureEra: function() {
    if (this.epochs.length === 0) {
      return undefined;
    }
    let startYear = this.epochs[0].startYear,
        endYear = this.epochs[0].endYear;
    this.epochs.forEach(function(epoch){
      startYear = epoch.startYear < startYear ? epoch.startYear : startYear;
      endYear = epoch.endYear > endYear ? epoch.endYear : endYear;
    });
    return [startYear, endYear];
  },
  addEpoch: function(epoch) {
    this.epochs.push(epoch);
    this.epochs.sort((a, b) => a.startYear - b.startYear)
  },
  updateEpochsView: function() {
    let startYear = this.measureEra()[0],
        epochContainer = $('#epochs');
    epochContainer.empty();
    this.epochs.forEach(function(epoch) {
      let epochOffset = epoch.startYear - startYear,
          epochLength = epoch.endYear - epoch.startYear;
      epochContainer.append(
        '<div class="epoch" style="' +
        `margin-left: ${epochOffset}px;`  +
        `width: ${epochLength}px;` +
        '"></div>'
      );
    });
  }
}
