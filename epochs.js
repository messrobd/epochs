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
    let startYear = this.epochs[0].startYear,
        epochVisuals = document.getElementsByClassName('epoch'),
        epochContainer = document.getElementById('epochs'),
        epochOffset,
        epochLength,
        epochVisual;
    for (let i = 0; i < this.epochs.length; i++) {
      epochOffset = this.epochs[i].startYear - startYear;
      epochLength = this.epochs[i].endYear - this.epochs[i].startYear;
      if (i === this.epochs.length - 1) {
        epochVisual = document.createElement('div');
        epochVisual.className = 'epoch';
        epochContainer.appendChild(epochVisual);
      } else {
        epochVisual = epochVisuals[i];
      }
      epochVisual.style = `margin-left: ${epochOffset}px; width: ${epochLength}px;`;
    }
  }
}
