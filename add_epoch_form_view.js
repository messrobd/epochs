function thisYear() {
  let today = new Date();
  return today.getFullYear();
}

const form = document.getElementsByTagName('form').namedItem('add-epoch');

form.onsubmit = (event) => {
  let fields = document.getElementsByTagName('input'),
      epochName = fields.namedItem('epoch-name').value,
      epochStart = Number(fields.namedItem('start-year').value),
      epochEnd = Number(fields.namedItem('end-year').value || thisYear()),
      newEpoch = createEpoch(epochName, epochStart, epochEnd);
  epochs.addEpoch(newEpoch);
  epochs.updateEpochsView();
  form.reset();
  toggleModal(modal);
  event.preventDefault();
};

buttons.namedItem('cancel-add-epoch').onclick = () => toggleVisibility(modal);
