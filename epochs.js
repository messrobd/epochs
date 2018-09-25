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
        epochLabels = document.getElementsByClassName('epoch-label'),
        epochVisuals = document.getElementsByClassName('epoch'),
        epochContainer = document.getElementById('epochs'),
        epochOffset,
        epochLength,
        epochLabel,
        epochVisual;
    for (let r = 0; r < this.epochs.length; r++) {
      for (let c = 0; c <= 1; c++) {
        switch (c) {
          case 0:
            if (r === this.epochs.length - 1) {
              epochLabel = document.createElement('div');
              epochLabel.className = 'epoch-label';
              epochContainer.appendChild(epochLabel);
            } else {
              epochLabel = epochLabels[r];
            }
            epochLabel.innerHTML = this.epochs[r].name;
            break;
          case 1:
            epochOffset = this.epochs[r].startYear - startYear;
            epochLength = this.epochs[r].endYear - this.epochs[r].startYear;
            if (r === this.epochs.length - 1) {
              epochVisual = document.createElement('div');
              epochVisual.className = 'epoch';
              epochContainer.appendChild(epochVisual);
            } else {
              epochVisual = epochVisuals[r];
            }
            epochVisual.style = `margin-left: ${epochOffset}px; width: ${epochLength}px;`;
            break;
        }
      }
    }
  }
}
