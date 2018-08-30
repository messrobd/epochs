const bill = createEpoch('bill', 1940, 1980);
const ben = createEpoch('ben', 1955, 2000);

epochs.addEpoch(ben);

const addEpoch = function() {
  epochs.addEpoch(bill);
  epochs.updateEpochsView()
}

$(document).on('click', addEpoch)
