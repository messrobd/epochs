$('form').submit((event) => {
  let epochName = $('input[name=name]').val(),
      epochStart = Number($('input[name=start-year]').val()),
      epochEnd = Number($('input[name=end-year]').val());
  newEpoch = createEpoch(epochName, epochStart, epochEnd);
  epochs.addEpoch(newEpoch);
  epochs.updateEpochsView();
  $('form')[0].reset();
  event.preventDefault();
});
