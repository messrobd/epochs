window.$ = window.jQuery = require('jquery');

function thisYear() {
  today = new Date();
  return today.getFullYear();
}

const toggleVisibility = function() {
  let hidden = modal.is('.hide');
  modal.toggleClass('hide', !hidden);
  modal.toggleClass('show', hidden);
}

const modal = $('#modal')
const form = $('form')

$('button[name=add-epoch-invoke]').click(toggleVisibility)

$(form).submit((event) => {
  let epochName = $('input[name=name]').val(),
      epochStart = Number($('input[name=start-year]').val()),
      epochEnd = Number($('input[name=end-year]').val() || thisYear());
  newEpoch = createEpoch(epochName, epochStart, epochEnd);
  epochs.addEpoch(newEpoch);
  epochs.updateEpochsView();
  $(form)[0].reset();
  toggleVisibility();
  event.preventDefault();
});

$('button[name=cancel-add-epoch]').click(toggleVisibility)
